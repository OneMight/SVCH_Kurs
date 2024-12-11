import { fetchUsers } from "../../store/Slices/userSlicer"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import './UsersTables.css'
import BasicTable from '../AllUsersTable/AllUsersTable'
export default function UsersTables(){
    const dispatch = useDispatch()
    
    const {error,status} = useSelector(state => state.users)
    const users = useSelector(state => state.users.users)
    useEffect(()=>{   
          dispatch(fetchUsers());
    },[])
    const data = users.data || [];
    console.log(data)
    if(status ===null || status ==='loading'){
        return <p>Loading</p>
    }
   
    return(
        <main className="admin-table">
            <p className="title-table">All register users on this web site</p>
            <div className="table">
                <BasicTable user={data}/>
            </div>
        </main>
    )
}