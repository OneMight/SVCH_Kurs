
const { Pilot } = require('../models/models')

class PilotController{

   async getPilots (req,res) {
        const groups = await Pilot.findAll();
        return res.json(groups);
    }
   async createPilot (req,res){
        const {PilotsName, PilotsSurname,PilotsBiography} = req.body;
        try{
        const pilot = await Pilot.create({
            PilotsName: PilotsName,
            PilotsSurname: PilotsSurname,
            PilotsBiography: PilotsBiography
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
module.exports = PilotController
