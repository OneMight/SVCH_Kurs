import { useNavigate} from 'react-router-dom'
import './AccountComp.css'
import {logout} from '../../store/Slices/userSlicer'
import { useDispatch, useSelector } from 'react-redux'

export default function AccountComp(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('currentUser'))


    const user = userData.user
   
    const LogoutFunc = () =>{
        dispatch(logout()).then(()=>{
            navigate('/')   
        })
        
    }
    return(
        <main className='account-main'>
            <article className='account-card'>
                <div className='user-inf'>
                    <div className='user-image'>
                        <img src="/images/emptyAvatar.png" alt="" />
                    </div>
                    <div className='user-credentials'>
                        <div>
                            <p>Name: {user.name || 'not specified'}</p>
                        </div>
                        <div>
                            <p>Username: {user.login} </p>
                        </div>
                        <div>
                            <p>User Age: {user.age || 'not specified'}</p>
                        </div>
                        <div>
                            <p>Nationality: {user.nationality || 'not specified'}</p>
                        </div>
                    </div>
                    
                </div>
                <div className='buttons-div'>
                    {
                    user.role === "user                                              " ? (
                        <>
                            <button className='button-user'>Saved pilot</button>
                            <button className='button-user'>Comporation</button>
                            <button className='button-user'> Support</button>
                        </>
                    ):(
                        <>
                            <button className='button-user'>Check users</button>
                        </>
                       
                    )}
                   
                </div>
            </article>
            <button className='button-user logout' onClick={() =>LogoutFunc()}>Logout</button>
        </main>
    )
}