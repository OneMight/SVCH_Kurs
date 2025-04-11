
const { Pilot, Team,Trophie,PilotStat,BestCircuit, Group } = require('../models/models')
const { Op } = require('sequelize');
class PilotController{

   async getPilots (req,res) {
        const { page = 1, limit = 10, sortBy = 'idPilot', order = 'ASC', search = '', filter = {} } = req.query;
        const offset = (page - 1) * limit;
        const where ={}    
        if(search){
            where[Op.or]= [
                {PilotName:{[Op.like]: `%${search}%`}},
            ]
        }
        for(const key in filter){
            if(filter.hasOwnProperty(key)){
                where[key] = filter[key];
            }
        }
        const data = await Pilot.findAndCountAll({
            where,
            limit,
            offset,
            order: [[sortBy,order]],
            include:[{
                model:Team,
                attributes:['teamName','photoTeam'],
                include: [{
                    model: Group,
                    as: 'Group',
                    attributes: ['groupName']
                }]
            }]
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
            const data = await Pilot.findByPk(id,{
                include:[{
                    model:Team,
                    attributes:['teamName','photoTeam', 'desciption'],
               
                },
               
                {
                    model:Trophie,
                    attributes:['idTrophie','nameTrophie', 'imageTrophie']
                },
                {
                    model:PilotStat,
                    attributes:["Starts","year",
                        "Scores",
                        "Wins",
                        "Podiums",
                        "PolePos",
                        "PlaceInSeason",
                        "PilotIdPilot"
                    ]
                },
                {
                    model:BestCircuit,
                    attributes:["idBestCircuit",
                        "name",
                        "photo",
                        "bestLap",
                        "bestLapSpeed",
                        "timeInPitstops",
                        "Pitstops"
                    ]
                }]
            });
            if(!data){
                return res.status(404).json({message: "Pilot not found"})
            }
            return res.json(data)
        }catch(err){
            return res.status(500).json({message : "Failed to retrieve pilot "+ err})
        }
    }
   async createPilot (req,res){
        const {PilotName, Nationality,photoPilot,photoNationality,Age,Biography, TeamIdTeam } = req.body;
        try{
        const pilot = await Pilot.create({
            PilotName: PilotName,
            Nationality: Nationality,
            photoPilot: photoPilot,
            photoNationality:photoNationality,
            Age:Age,
            Biography:Biography,
            TeamIdTeam:TeamIdTeam
           })
           return res.status(201).json(pilot)
        }
        catch(err){
            console.log(err)
            res.status(400).json("error of creating pilot");
        }
    }
    async updatePilot(req,res){
        const { id } = req.params
        const { PilotsName, PilotsSurname,PilotsBiography } = req.body
        try{
            const pilot = await Pilot.findByPk(id)
            if(!pilot){
                return res.status(404).json({message: "Pilot is not found"})
            }
            await pilot.update( {PilotsName,PilotsSurname,PilotsBiography} )
            return res.status(201).json({message: 'Pilot is updated'})
        }catch(err){
            res.status(400).json({message: 'Requset is not complete ' +err});
        }

    }
   async deletePilot(req,res) {
        const { id }= req.params
        try{
            const pilot = await Pilot.findByPk(id)
            if(!pilot){
                return res.status(404).json({message: "pilot not found"})
            }
            await pilot.destroy();
            return res.status(204);
        }catch(err){
        
            console.log(err)
            return res.status(500).json({ message: 'Error deleting pilot' });
        }

    }
}
module.exports = new PilotController()
