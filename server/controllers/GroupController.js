const {Groups} = require('../models/models')

class GroupsController{
    async getAll(res){
        const groups = await Groups.findAll();
        return res.json(groups);
    }
}
