
const { Trophie } = require('../models/models')

class TrophieController{

   async getTrophies (req,res) {
        const trophie = await Trophie.findAll();
        return res.json(trophie);
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
