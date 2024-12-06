import './OnePilotCon.css'
import {Link} from 'react-router-dom'

export default function OnePilotCon(pilot){

    const pilots = pilot.pilot
    const getPilotDescriptionLines = (text, lineCount) => {
        const sentences = text.split('. ').filter(sentence => sentence);
        return sentences.slice(0, lineCount).join('. ') + (sentences.length > lineCount ? '.' : '');
    };
    return(
        pilots.map(pilot =>(
            <Link className='con-inf' to={`/pilotDetails/${pilot.idPilot}`} key={pilot.idPilot}>
                
                <div className='image-div'>
                    <img src={`images/${pilot.photoPilot}`} alt="" />
                </div>
                <article className='about-inf'>
                    <div className='title-div'>
                        <p className='inf-name'>
                            {pilot.PilotName}
                        </p>
                        <img src={`images/${pilot.Team.photoTeam}`} alt="" />
                        <p className="inf-name">{pilot.Team.teamName}</p>
                    </div>
                    <p className='desc-inf'>{getPilotDescriptionLines(pilot.Biography, 3)}</p>
                    
                </article>
            </Link>
        ))
    )
}