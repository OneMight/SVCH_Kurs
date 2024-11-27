const { Team, Group } = require('../models/models');

class TeamController {
    async getTeams(req, res) {
        try {
            const teams = await Team.findAll();
            return res.json(teams);
        } catch (error) {
            console.error(error);
            return res.sendStatus(400);
        }
    }

    async createTeam(req, res) {
        const { teamName, description, photoTeam } = req.body;
        try {
            const team = await Team.create({
                teamName,
                description,
                photoTeam
            });
            return res.status(201).json(team);
        } catch (error) {
            console.error(error);
            return res.sendStatus(400);
        }
    }

    async updateTeam(req, res) {
       const {id} = req.params
        const {teamName, description, photoTeam } = req.body
        try {
            const team = await Team.findByPk(id);
            if(!team){
                return res.status(404).json({message: "Team is not found by id"})
            }
            await team.update({teamName,description,photoTeam})
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

module.exports = TeamController;