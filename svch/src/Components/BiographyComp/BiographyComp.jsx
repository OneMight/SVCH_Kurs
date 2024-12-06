import './BiographyComp.css'

export default function BiographyComponent(props){
    return(
        <article className="Biography">
            <p className='Title-biography'>Pilot Biography</p>
            <p className='description'>{props.pilot.Biography}</p>
        </article>
    )
}