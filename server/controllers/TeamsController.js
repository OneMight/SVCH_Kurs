const { Team } = require('../models/models');
const { Op } = require('sequelize');
class TeamController {
    async getTeams(req, res) {
        const { page = 1, limit = 10, sortBy = 'idTeam', order = 'ASC', search = '', filter = {} } = req.query;
        const offset = (page - 1) * limit;
        const where ={}
        
        if(search){
            where[Op.or]= [
                {teamName:{[Op.like]: `%${search}%`}}
            ]
        }

        for(const key in filter){
            if(filter.hasOwnProperty(key)){
                where[key] = filter[key];
            }
        }
        const data = await Team.findAndCountAll({
            where,
            limit,
            offset,
            order: [[sortBy,order]]
            });
            
        
            return res.json({
                total: data.count,
                pages: Math.ceil(data.count / limit),
                data: data.rows
            })
    }
    async getById(req,res){
        try{
            const id = req.params.id;
            const data = await Team.findByPk(id);
            if(!data){
                return res.status(404).json({message: "Team not found"})
            }
            return res.json(data)
        }catch(err){
            return res.status(500).json({message : "Failed to retrieve team "+ err})
        }
    }
    async createTeam(req, res) {
        const { teamName, desciption, photoTeam, hidendisc} = req.body;
        try {
            const team = await Team.create({
                teamName,
                desciption,
                photoTeam,
                hidendisc
            });
            return res.status(201).json(team);
        } catch (error) {
            console.error(error);
            return res.sendStatus(400);
        }
    }

    async updateTeam(req, res) {
       const {id} = req.params
        const {teamName, description, photoTeam,GroupIdGroup} = req.body
        try {
            const team = await Team.findByPk(id);
            if(!team){
                return res.status(404).json({message: "Team is not found by id"})
            }
            await team.update({teamName,description,photoTeam,GroupIdGroup})
            return res.status(201).json({message: `Team ${id} is updated`})


        } catch (error) {
            console.error(error);
            return res.Status(400).json({message: "Something went wrong"});
        }
    }

    async deleteTeam(req, res) {
        const id = req.params.id
        try {
            const team = await Team.findByPk(id)
            if(!team){
                return res.status(404).json({ message: 'Team not found' });
            }
            await team.destroy();
            return res.sendStatus(204); 
        } catch (error) {
            console.error('Команда не найдена и не удалена: ' + error);
            return res.status(500).json({ message: 'Error deleting team' });
        }
    }
}

module.exports = new TeamController();