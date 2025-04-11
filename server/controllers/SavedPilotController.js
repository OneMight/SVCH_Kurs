const {SavedPilot, Pilot, User,Team} = require('../models/models')
const { Op } = require('sequelize');
class SavedPilotController{
    async getAllSaved(req,res){
        const { page = 1, limit = 10, sortBy = 'idUser', order = 'ASC', search = '', filter = {} } = req.query;
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
        const savedPilot = await User.findAndCountAll({
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
                return res.status(400).json({message: 'Pilots already saved'});
            }
            const savedPilot = await SavedPilot.create({
                idPilot: idPilot,
                idUser: idUser
            })
            return res.status(201).json({message: 'Pilot Save'});
        }catch(error){
            res.status(500).json({ message: `Add pilot error: ${error.message} `});
        }
    }
    async getSavedPilotsForUser(req, res) {
        const {id} = req.params;   
        const { page = 1, limit = 10, search = ''} = req.query;
        const offset = (page - 1) * limit;
        if(search){
            where[Op.or]= [
                {PilotName:{[Op.like]: `%${search}%`}},
            ]
        }
        try {
            const userWithPilots = await User.findAndCountAll({
                offset,
                limit,
                where: { idUser: id },
                include: [{
                    model: Pilot,
                    through: { attributes: [] },
                    include: [{
                        model: Team,
                        attributes: ['teamName','photoTeam'], 
                    }],
                }]
            });

            if (!userWithPilots) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json({
                total:userWithPilots.count,
                pages: Math.ceil(userWithPilots.count / limit),
                data: userWithPilots.rows
            }); 
        
        } catch (error) {
            console.error('Error fetching saved pilots:', error);
            return res.status(500).json({ message: `Internal server error ${error.message}` });
        }
    }
    async deleteSavedPilot(req,res){
        const {idPilot,idUser} = req.body;
       
        const deletedSaved = await SavedPilot.destroy({
            where: {
                idPilot: idPilot,
                idUser: idUser
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