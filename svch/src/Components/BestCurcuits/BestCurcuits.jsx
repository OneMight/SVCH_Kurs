import './BestCurcuits.css'

export default function BestCurcuits(props){
   const curcuits = props.curcuits

    return(
        <article className='container'>
            {
                curcuits.map(curcuit =>(
                    <div className='best-curcuit-div' key={curcuit.idBestCircuit}>
                        <div className='image-curcuit'>
                            <img src={`/images/${curcuit.photo}`} alt="" />
                        </div>
                        <div className='curcuit-inf'>
                            <div className='curcuit-title'>
                                <p>{curcuit.name}</p>
                            </div>
                            <div className='curcuit-description'>
                                <p>The best lap: {curcuit.bestLap}</p>
                                <p>best lap speed: {curcuit.bestLapSpeed}</p>
                                <p>time in pitstops: {curcuit.timeInPitstops}</p>
                                <p>Pitspops: {curcuit.Pitstops}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </article>
    )
}