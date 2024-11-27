
const { Group } = require('../models/models')
const { Op } = require('sequelize');
class GroupController{

   async getGroups (req,res) {
    const { page = 1, limit = 10, sortBy = 'idGroup', order = 'ASC', search = '', filter = {} } = req.query;
    const offset = (page - 1) * limit;
    const where ={}
    
    if(search){
        where[Op.or]= [
            {groupName:{[Op.like]: `%${search}%`}}
        ]
    }

    for(const key in filter){
        if(filter.hasOwnProperty(key)){
            where[key] = filter[key];
        }
    }
    const groups = await Group.findAndCountAll({
           where,
           limit,
           offset,
           order: [[sortBy,order]]
        });
        
       
        return res.json({
            total: groups.count,
            pages: Math.ceil(groups.count / limit),
            data: groups.rows
        })
    }

    async getById(req,res){
        try{
            const id = req.params.id;
            const data = await Group.findByPk(id);
            if(!data){
                return res.status(404).json({message: "Group not found"})
            }
            return res.json(data)
        }catch(err){
            return res.status(500).json({message : "Failed to retrieve group "+ err})
        }
    }
   async createGroup (req,res){
        const {groupname, description,imageGroup} = req.body;
        try{
        const group = await Group.create({
            groupName: groupname,
            desciption: description,
            imageGroup: imageGroup
           })
           return res.status(201).json(group)
        }
        catch(err){
            console.log(err)
            res.status(400).json("Ошибка при создании группы");
        }
    }
    async UpdateGroup(req,res){
        const { id } = req.params
        const { groupName, desciption,imageGroup } = req.body
        try{
            const group = await Group.findByPk(id)
            if(!group){
                return res.status(404).json({message: "Group is not found"})
            }
            await group.update( {groupName,desciption,imageGroup} )
            return res.status(201).json({message: 'Group is updated'})
        }catch(err){
            res.status(400).json({message: 'Requset is not complete ' +err});
        }

    }
   async DeleteGroup(req,res) {
        const id = req.params.id
        try{
            const group = await Group.findByPk(id)
            if(!group){
                return res.status(404).json({message: "group not found"})
            }
            await group.destroy();
            return res.status(204);
        }catch(err){
        
            console.log(err)
            return res.status(500).json({ message: 'Error deleting group' });
        }

    }
}
module.exports = GroupController
