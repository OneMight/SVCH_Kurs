const {SavedPilot, Pilot, User} = require('../models/models')
const { Op } = require('sequelize');
class SavedPilotController{
    async getAllSaved(req,res){
        const { page = 1, limit = 10, sortBy = 'idSavedPilot', order = 'ASC', search = '', filter = {} } = req.query;
        const offset = (page - 1) * limit;
        const where ={}
        
        if(search){
            where[Op.or]= [
                {PilotName:{[Op.like]: `%${search}%`}}
            ]
        }

        for(const key in filter){
            if(filter.hasOwnProperty(key)){
                where[key] = filter[key];
            }
        }
        const savedPilot = await SavedPilot.findAndCountAll({
            where,
            limit,
            offset,
            order: [[sortBy,order]],
            include:[{
                model:Pilot,
                required:true
            }]
        });
            
        
        return res.json({
            total: savedPilot.count,
            pages: Math.ceil(savedPilot.count / limit),
            data: savedPilot.rows
        })
    }
    async addToSaved(req,res){
        const {idPilot, idUser} = req.body;
        try{
            const existingSavedPilot = await SavedPilot.findOne({
                where:{
                    idPilot:idPilot,
                    idUser:idUser
                }
            })
            if(existingSavedPilot){
                return res.status(400).json('Pilots already saved');
            }
            const savedPilot = await SavedPilot.create({
                idPilot: idPilot,
                idUser: idUser
            })
            return res.status(201).json(savedPilot);
        }catch(error){
            res.status(500).json('Add pilot error');
        }
    }
    async getSavedPilotsForUser(req, res) {
        const idUser = req.params.idUser; 

        try {
            const userWithPilots = await User.findOne({
                where: { idUser: idUser },
                include: [{
                    model: Pilot,
                    through: { attributes: [] }
                }]
            });

            if (!userWithPilots) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.json(userWithPilots.Pilot); 
        } catch (error) {
            console.error('Error fetching saved pilots:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    async deleteSavedPilot(req,res){
        const {idPilot, idUser} = req.body;
        const deletedSaved = await SavedPilot.destroy({
            where: {
                idPilot: idPilot,
                userId: idUser
            }
        });

        if (!deletedSaved) {
            return res.status(404).json({ message: 'Saved pilot not found' }); // Если запись не найдена
        }

        return res.status(200).json({ message: 'Pilot removed from saved pilots' }); // Успешное удаление
    } catch (error) {
     
        return res.status(500).json({ message: 'Internal server error',error });
    }
    
}

module.exports = new SavedPilotController();