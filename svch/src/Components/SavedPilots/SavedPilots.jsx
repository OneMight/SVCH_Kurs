
import OnePilotCon from '../OnePilotCon/OnePilotCon'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSavedPilots} from '../../store/Slices/pilotsSlicer'
import {jsPDF,} from 'jspdf'

import autoTable from "jspdf-autotable"
export default function SavedPilots(){
    const userData = JSON.parse(localStorage.getItem('currentUser'))
    const user = userData.user
    const [currenctpage, setPage] = useState(1);
    const {status} = useSelector(state => state.pilots)
    const  savedPilots  = useSelector(state => state.pilots.savedPilots)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSavedPilots());
       
    },[])
    
    if(status === 'loading' || status === null){
        return <div>loading</div>
    }
    const data = savedPilots.data[0].Pilots || [];
    

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
    if(data.length == 0 || data === null){
        return <h2>You don't save any Pilots</h2>
    }
    return(
        <main className='pilot-main'>
           
                <>
                <button className='button-user' onClick={generate}>Report</button>
                <section className='filters-and-pilots'>
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
            
       

    </main>
    )
}