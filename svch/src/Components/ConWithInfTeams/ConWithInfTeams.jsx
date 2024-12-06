import './ConWithInfTeams.css'
import { useState } from 'react'
export default function ConWithInf(datateams){
    const teams = datateams.team

    const [open,setOpen] = useState(null)

const HandlerOpen = (id) =>{
    id === open ? setOpen(null) :setOpen(id)
}

    return(
        teams.map(team =>(
            <div className='con-inf' key={team.idTeam} >
                    
                <div className='image-div'>
                    
                    <img src={`images/${team.photoTeam}`} alt="" />
                </div>
                <button className='about-inf' onClick={() => HandlerOpen(team.idTeam)}>
                    <div className='title-div'>
                        <p className='inf-name'>
                            {team.teamName}
                        </p>
                    </div>
                    <p className='desc-inf'>{team.desciption}</p>
                    <div className={`accordion-collapse ${team.idTeam === open? 'open':''}`}>
                        <p className='desc-inf'>{team.hidendisc}</p>
                    </div>
                </button>
            
            </div>
        ))
    )
}