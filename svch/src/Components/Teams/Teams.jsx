import './Teams.css'
import ConWithInfTeams from '../ConWithInfTeams/ConWithInfTeams.jsx'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeams, searchTeams} from '../../store/Slices/teamSlicer.js'

export default function Teams(){
    const [currenctpage, setPage] = useState(1);
    const dispatch = useDispatch()
    const {status,error, teams } = useSelector(state => state.teams)
    const [search, setSearch] = useState('')

    const data = teams.data || [];

    useEffect(()=>{
        dispatch(fetchTeams(currenctpage));
       
    },[dispatch])

    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }

    const Search = () =>{
        if(search){
            dispatch(searchTeams(search))
        }
        else{
            dispatch(fetchTeams())
        }
    }
    const SwitchRight = ()=>{
        if(currenctpage + 1 > teams.pages){
            alert("Максимальная страницы");
        }
        else{
            const newPage = currenctpage + 1;
            setPage(newPage)
            dispatch(fetchTeams(newPage));
        }
    }
    const SwitchLeft =()=>{
        if(currenctpage - 1 == 0){
            alert("Минимальная страницы")
        }
        else{
            const newPage = currenctpage - 1;
            setPage(newPage)
            dispatch(fetchTeams(newPage));
        }
    }
    return(
        <main className=''>
            {status === 'loading' && <h2>Loading</h2>}
            {error && <h2>An Error occured: {error}</h2>}
            <div className='search-input'>
                <input type="text" onChange={HandleSearch} value={search}/>
                <button onClick={() =>Search()}><img src="./images/search-normal.png" alt="" /></button>
            </div>
            
            <section className='teams-data'>
                    <ConWithInfTeams team = {data}/> 
            </section>
            <div className='navigate'>
                <button onClick={()=> SwitchLeft()}>left</button>
                <p>{currenctpage} / {teams.pages}</p>

                <button onClick={() => SwitchRight()}>right</button>  
            </div>
       
        </main>
    )
}