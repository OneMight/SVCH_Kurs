import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGroups, searchGroups} from '../../store/Slices/groupSlicer'
import './grops.css'
import ConWithInf from '../ConWithInf/ConWithInf'

export default function Groups(){

const dispatch = useDispatch()
const {status,error, groups } = useSelector(state => state.groups)
const [search, setSearch] = useState('')
const data = groups.data || [];
    useEffect(()=>{
        dispatch(fetchGroups());
       
    },[dispatch])

    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }

    const Search = () =>{
        if(search){
            dispatch(searchGroups(search))
        }
        else{
            dispatch(fetchGroups());
        }
    }


    return(
        <main className='group-main'>
            {status === 'loading' && <h2>Loading</h2>}
            {error && <h2>An Error occured: {error}</h2>}
            <div className='search-input'>
                <input className='input' type="text" onChange={HandleSearch} value={search} placeholder='Search....'/>
                <button className='search' onClick={() =>Search()}><img src="./images/search-normal.png" alt="" /></button>
            </div>
            
            <section className='groups-data'>
                    <ConWithInf group = {data}/> 
            </section>
        </main>
            
    )
      
        
}