
const { Group } = require('../models/models')

class GroupController{

   async getGroups (req,res) {
        const groups = await Group.findAll();
        return res.json(groups);
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
