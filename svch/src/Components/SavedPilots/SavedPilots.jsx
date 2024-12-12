
import OnePilotCon from '../OnePilotCon/OnePilotCon'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSavedPilots, searchPilots} from '../../store/Slices/pilotsSlicer'
import {jsPDF,} from 'jspdf'

import autoTable from "jspdf-autotable"
export default function SavedPilots(){
    const userData = JSON.parse(localStorage.getItem('currentUser'))
    const user = userData.user
    const [currenctpage, setPage] = useState(1);
    const [search, setSearch] = useState('')
    const { savedPilots}  = useSelector(state => state.pilots)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSavedPilots());
       
    },[])
  
    const data = savedPilots || [];

    const HandleSearch = (e) => {
        setSearch(e.target.value)
    }

    const Search = () =>{
        if(search){
            dispatch(searchPilots(search))
        }
        else{
            dispatch(getSavedPilots());
        }
    }
    
    const SwitchRight = ()=>{
        if(currenctpage + 1 > savedPilots.pages){
            alert("Максимальная страницы");
        }
        else{
            const newPage = currenctpage + 1;
            setPage(newPage)
            dispatch(getSavedPilots());
        }
    }
    const SwitchLeft =()=>{
        if(currenctpage - 1 === 0){
            alert("Минимальная страницы")
        }
        else{
            const newPage = currenctpage - 1;
            setPage(newPage)
            dispatch(getSavedPilots());
        }
    }
    
    function generate() {
        const pdfDoc = new jsPDF();
        pdfDoc.setFont("times", "bold");
        pdfDoc.setFontSize(14);
        pdfDoc.setCharSpace(0.5);
        const formattedDate = new Date().toLocaleDateString();
        pdfDoc.text(`Saved Pilots report. Date: ${formattedDate}`, 10, 10);
        pdfDoc.text(`Creator of report: ${user.name}`, 10,20)
        const columns = ["Pilot name", "Team name", "Age","Nationality"];
        const rows = data.map(pilot => [pilot.PilotName, pilot.Team.teamName, pilot.Age, pilot.Nationality]);

        autoTable(pdfDoc, {
          theme: "grid",
          headStyles: { fontSize: 10 },
          bodyStyles: { fontSize: 10, fontStyle: "italic" },
          head:[columns],
          body: rows,
          startY: 40,
        });
    
        pdfDoc.save(`${user.name}_Report.pdf`);
    }
    console.log(data)
    return(
        <main className='pilot-main'>
            {data.length === 0 ? (
                <><p className='error-Saved-Pilots'>You don't save any Pilots</p></>
            ):(
                <>
                <div className='search-input'>
                    <input className='input' type="text" onChange={HandleSearch} value={search} placeholder='Search....'/>
                    <button className='search' onClick={() =>Search()}><img src="./images/search-normal.png" alt="" /></button>
                </div>
                <button className='button-user' onClick={generate}>Report</button>
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
                            <p>{currenctpage} / {savedPilots.pages}</p>
                        <button className='navigate-button right' onClick={() => SwitchRight()}><img src='./images/arrow-right-navigate.png' alt=''/></button>  
                    </div>
                </section>
                </>
            )}
       

    </main>
    )
}