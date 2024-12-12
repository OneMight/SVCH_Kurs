import { fetchUsers } from "../../store/Slices/userSlicer"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import './UsersTables.css'
import BasicTable from '../AllUsersTable/AllUsersTable'

import {jsPDF,} from 'jspdf'
import {
     firstTableColumns,
     firstTableData,
     secondTableColumns,
     secondTableData} from 'jspdf-autotable'
import autoTable from "jspdf-autotable"

export default function UsersTables(){
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('currentUser'))
    const user = userData.user
    
    const {status} = useSelector(state => state.users)
    const users = useSelector(state => state.users.users)
    useEffect(()=>{   
          dispatch(fetchUsers());
    },[])
    const data = users.data || [];
    console.log(data)
    if(status ===null || status ==='loading'){
        return <p>Loading</p>
    }
    function generate() {
        const pdfDoc = new jsPDF();
        pdfDoc.text("All users report", 15, 10);
        const columns = ["Email", "Name", "Login","Age","Nationality",];
        const rows = data.map(user => [user.email, user.name, user.login, user.age, user.nationality]);

        autoTable(pdfDoc, {
          theme: "grid",
          headStyles: { fontSize: 10 },
          bodyStyles: { fontSize: 8, fontStyle: "italic" },
          head:[columns],
          body: rows
        });
    
        pdfDoc.save("UsersReport.pdf");
  }
    return(
        <main className="admin-table">
            <p className="title-table">All register users on this web site</p>
            <div className="table">
                <BasicTable user={data}/>
            </div>
            <button className="button-user"  onClick={generate}>Create report</button>
        </main>
    )
}