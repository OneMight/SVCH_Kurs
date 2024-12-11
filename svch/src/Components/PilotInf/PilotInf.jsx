import { useEffect,useState } from 'react'
import './PilotInf.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Tabes from '../Tabes/Tabes'
import {  getByIdPilot,SavePilot, addToComporation } from '../../store/Slices/pilotsSlicer'
import Alert from '../ReadyToUseComponents/alert'
export default function PilotInf(){
    const {id} = useParams();
    const [isCorrect, setIsCorrect] = useState(true)
    const pilots = useSelector(state => state.pilots.comporationPilots)
    const { status, error } = useSelector(state => state.pilots);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getByIdPilot(id))
    },[])
    const currentPilot = useSelector(state => state.pilots.currentPilot);

    const HandleSavePilot = (id)=>{
        try{
             dispatch(SavePilot(id))
        }
        catch(error){
            setIsCorrect(false);
            return
        }

    }
    const HandleComporation = (pilot) =>{
       dispatch(addToComporation(pilot))
     
       console.log(pilots)
   }
    if(status === 'loading' || status === null || currentPilot ===null){
        return <div>loading</div>
    }
    const Trophies = currentPilot.Trophies
   
    return(
   
        <main className='pilotInf'>
              {status === 'rejected' && <Alert setIsCorrect={setIsCorrect} message='Pilot is already save'/>}
            <div className='buttons-control'>
                <button className='controll' onClick={() => HandleSavePilot(currentPilot.idPilot)}>Save Pilot</button>
                <button className='controll' onClick={() => HandleComporation(currentPilot)}>Add to comparation</button>
            </div>
            <div className='sub-div'>
                <article  className='card-pilot' key={currentPilot.idPilot}>
                    <div className='information'>
                            <img className='photo-pilot' src={`/images/${currentPilot.photoPilot}`} alt="" />
                        <div className='inf-field'>
                            <div>
                                <p>Name: {currentPilot.PilotName}</p>
                            </div>
                            <div>
                                <p>Current team: {currentPilot.Team.teamName}</p>
                                <img className='team-photo' src={`/images/${currentPilot.Team.photoTeam}`} alt="" />
                            </div>
                            <div>
                                <p>Age: {currentPilot.Age}</p>
                            </div>
                            <div>
                                <p>Nationlity: {currentPilot.Nationality}</p>
                                <img className='nationality-photo' src={`/images/${currentPilot.photoNationality}`} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    <div className='img-trophies'>
                        
                        {Trophies.map(trophie =>(
                            
                            <img src={`/images/${trophie.imageTrophie}`} alt="" />
                        ))}
                    </div>
                </article>
                <article className='selection-pilots'>
                <Tabes pilot={currentPilot}/>
              </article>
            </div>

              
      </main>
    )
}