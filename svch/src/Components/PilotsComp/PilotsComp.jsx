import './PilotsComp.css'
import OnePilotCon from '../OnePilotCon/OnePilotCon'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPilots, searchPilots} from '../../store/Slices/pilotsSlicer'
export default function PilotsComp(){
    const [currenctpage, setPage] = useState(1);
    const [search, setSearch] = useState('')
    const { pilots,status,error } = useSelector(state => state.pilots)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPilots(currenctpage));
       
    },[dispatch])
  
    const data = pilots.data || [];
   

    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }

    const Search = () =>{
        if(search){
            dispatch(searchPilots(search))
        }
        else{
            dispatch(fetchPilots(currenctpage));
        }
    }
    
    const SwitchRight = ()=>{
        if(currenctpage + 1 > pilots.pages){
            alert("Максимальная страницы");
        }
        else{
            const newPage = currenctpage + 1;
            setPage(newPage)
            dispatch(fetchPilots(newPage));
        }
    }
    const SwitchLeft =()=>{
        if(currenctpage - 1 === 0){
            alert("Минимальная страницы")
        }
        else{
            const newPage = currenctpage - 1;
            setPage(newPage)
            dispatch(fetchPilots(newPage));
        }
    }
    if(status ==='loading'){
        return <h2>Loading</h2>
    }
    if(error){
        return <h2>An Error occured: {error}</h2>
    }
    return(
        <main className='pilot-main'>
            <div className='search-input'>
                <input className='input' type="text" onChange={HandleSearch} value={search} placeholder='Search....'/>
                <button className='search' onClick={() =>Search()}><img src="./images/search-normal.png" alt="" /></button>
            </div>
            <section className='filters-and-pilots'>
                <article className='filters-div'> 
                    <p>Filters</p>
                    <div className='filters'>
                        <label>
                            <input type="checkbox" name="Formula1" id=""/> Formula 1
                        </label>
                        <label>
                            <input type="checkbox" name="Gt3" id=""/> Gt3
                        </label>
                        <label>
                            <input type="checkbox" name="Gt4" id=""/> Gt4
                        </label>
                    </div>
                </article>
                <div className='pilots-div'>
                    <OnePilotCon pilot = {data}/>
                </div>
                <div className='navigate'>
                <button className='navigate-button left' onClick={()=> SwitchLeft()}><img src='./images/arrow-left-navigate.png' alt=''/></button>
                <p>{currenctpage} / {pilots.pages}</p>

                <button className='navigate-button right' onClick={() => SwitchRight()}><img src='./images/arrow-right-navigate.png' alt=''/></button>  
            </div>
            </section>

        </main>
    )
}