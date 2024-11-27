
const { Trophie } = require('../models/models')
const { Op } = require('sequelize');
class TrophieController{

   async getTrophies (req,res) {
    const { page = 1, limit = 10, sortBy = 'idTrophie', order = 'ASC', search = '', filter = {} } = req.query;
    const offset = (page - 1) * limit;
    const where ={}
    if(search){
        where[Op.or]= [
            {nameTrophie:{[Op.like]: `%${search}%`}}
        ]
    }
    for(const key in filter){
        if(filter.hasOwnProperty(key)){
            where[key] = filter[key];
        }
    }

    const data = await Trophie.findAndCountAll({
        where,
        limit,
        offset,
        order: [[sortBy,order]]
    })
    return res.json({
        total: data.count,
        pages: Math.ceil(data.count / limit),
        data: data.rows
    })
    }
   async createTrophie (req,res){
        const {nameTrophie, imageTrophie} = req.body;
        try{
        const trophie = await Trophie.create({
            nameTrophie: nameTrophie,
            imageTrophie: imageTrophie,
       
           })
           return res.status(201).json(trophie)
        }
        catch(err){
            console.log(err)
            res.status(400).json("error of creating pilot");
        }
    }
    async getById(req,res){
        try{
            const id = req.params.id;
            const data = await Trophie.findByPk(id);
            if(!data){
                return res.status(404).json({message: "Trophie not found"})
            }
            return res.json(data)
        }catch(err){
            return res.status(500).json({message : "Failed to retrieve trophie "+ err})
        }
    }
    async UpdateTrophie(req,res){
        const { id } = req.params
        const { nameTrophie, imageTrophie} = req.body
        try{
            const trophie = await Trophie.findByPk(id)
            if(!trophie){
                return res.status(404).json({message: "Pilot is not found"})
            }
            await trophie.update( {nameTrophie,imageTrophie} )
            return res.status(201).json({message: 'Pilot is updated'})
        }catch(err){
            res.status(400).json({message: 'Requset is not complete ' +err});
        }

    }
   async DeleteTrophie(req,res) {
        const { id }= req.params
        try{
            const trophie = await Trophie.findByPk(id)
            if(!trophie){
                return res.status(404).json({message: "pilot not found"})
            }
            await trophie.destroy();
            return res.status(204);
        }catch(err){
        
            console.log(err)
            return res.status(500).json({ message: 'Error deleting pilot' });
        }

    }
}
module.exports = TrophieController
