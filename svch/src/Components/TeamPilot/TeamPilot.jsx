import './TeamPilot.css'
export default function TeamPilot(props){
    return(
        <article className="pilot-team-con">
            <div className="group-con">
                <img className='group-image' src={`/images/${props.pilotTeam.photoTeam}`} alt="" />
            </div>
            <div className="con">
                <div className="title-con">
                    <p className="title">{props.pilotTeam.teamName}</p>
                </div>
                <div className="description-con">
                    <p className="description">{props.pilotTeam.desciption}</p>
                </div>
            </div>
        </article>
    )
}