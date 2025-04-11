const {PilotStat, Pilot} = require('../models/models')

class PilotStatController{

    async getAllStat(req,res){
        const {sortBy = 'idPilotStat', order = 'ASC'} = req.query;
        const Stats = await PilotStat.findAndCountAll({
            order: [[sortBy,order]]
        });
        return res.json({
            total: Stats.count,
            pages: Math.ceil(Stats.count / limit),
            data: Stats.rows
        })
    
    }
    async getPilotStat(req,res){
        const {idPilot} = req.params.idPilot;
        try{
            const PilotStat = await Pilot.findOne({
                where:{idPilot},
                include:[{
                    model:PilotStat,
                    required: false
                }]
            })
            if(!PilotStat){
                res.status(404).json('Pilot not found')
            }
            return res.status(201).json(PilotStat);
        }
        catch(error){
            return res.status(500).json('Internal server error');
        }
    }
    async createPilotStat(req,res){
        const {TeamName,Starts,year,Scores,Wins,
            Podiums,PolePos,PlaceInSeason,PilotIdPilot} = req.body;
        try{
            const pilotStat = await PilotStat.create({
                TeamName: TeamName,
                Starts:Starts,
                year:year,
                Scores:Scores,
                Wins:Wins,
                Podiums:Podiums,
                PolePos:PolePos,
                PlaceInSeason:PlaceInSeason,
                PilotIdPilot:PilotIdPilot
            })
            return res.status(201).json(pilotStat)
        }catch(error){
            return res.status(500).json('Internal server error '+ error);
        }
    }
}

module.exports = new PilotStatController()