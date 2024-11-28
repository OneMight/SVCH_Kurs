import axios from 'axios';
import './grops.css'
import { useEffect, useState } from 'react';

export default function Groups(){
    const [groups, setgroups] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/api/group?search=${search}`)
        .then((res) =>{
            // console.log('результаты:')
            // console.log(res)
            setgroups([res.data])
       
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])

    const data = groups.map(group =>{
        return group.data
    });
    
    const HandleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const buttonSearch = document.getElementById('search')
    buttonSearch.addEventListener('click', () =>{
        axios
        .get(`http://localhost:5000/api/group?${search}`)
        .then((res) =>{
            // console.log('результаты:')
            // console.log(res)
            setgroups([res.data])
       
        })
        .catch((err) =>{
            console.log(err)
        })
    })
    console.log(data);
    return(
        <main className='group-main'>
            <div className='search-input'>
                <input type="text" onChange={HandleSearch} />
                <button id='search'><img src="./images/search-normal.png" alt="" /></button>
            </div>
            <section className='groups-data'>
                {
                    data[0].map(group =>(
                
                        <div className='group-inf'>
                            <div className='image-div'>
                                
                                <img src={`images/${group.imageGroup}`} alt="" />
                            </div>
                            <div className='about-group'>
                                <div className='title-div'>
                                    <p className='group-name'>
                                        {group.groupName}
                                    </p>
                                </div>
                                <p className='desc-group'>{group.desciption}</p>  
                            </div>
                            
                        </div>
                    ))
                }
            </section>
        </main>
            
    )
      
        
}