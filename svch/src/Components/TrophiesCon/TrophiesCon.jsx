import './TrophiesCon.css';
export default function TrophiesCon(props){
    const trophies = props.trophie
  
    return(
        <article className="trophies-con">
            {trophies.map(trophie =>(
                <div className='trophie-description' key={trophie.idTrophie}>
                    <div className='image-trophie'>
                      <img src={`/images/${trophie.imageTrophie}`} alt="" />
                    </div>
                    <p className='title-trophie'>{trophie.nameTrophie}</p>
                </div>
            ))}
        </article>
    )
}