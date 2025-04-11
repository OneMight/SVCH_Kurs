const {BestCircuit, Pilot} = require('../models/models')

class BestCircuitController{
    async getAllBestCircuit(req, res){
        const {sortBy = 'idBestCircuit', order = 'ASC'} = req.query;
        const BestCircount = await BestCircuit.findAndCountAll({
            order: [[sortBy,order]]
        });
        return res.status(201).json(BestCircount);
    }
    async getBestCurcuitForPilot(req,res){
        const idPilot = req.params.id
        try{
            const PilotCircuit = await Pilot.findOne({
                where:idPilot,
                include:[{
                    model:BestCircuit,
                    required:false
                }]
            })
            if(!PilotCircuit){
                return res.status(404).json('Curcuits not found')
            }
            return res.status(201).josn(PilotCircuit)
        }catch(error){
            return res.status(500).json('Internal server error')
        }
    }
    async createBestCurcuitPilot(req,res){
        const { name,photo,bestLap,bestLapSpeed,timeInPitstops,Pitstops,PilotIdPilot } = req.body
        try{
            const BestCurcuitPilot = await BestCircuit.create({
                name: name,
                photo: photo,
                bestLap:bestLap,
                bestLapSpeed: bestLapSpeed,
                timeInPitstops: timeInPitstops,
                Pitstops:Pitstops,
                PilotIdPilot:PilotIdPilot
            })
            return res.status(200).json(BestCurcuitPilot)
        }catch(error){
            return res.status(500).json('Internal server error')
        }
    }
}

module.exports = new BestCircuitController()