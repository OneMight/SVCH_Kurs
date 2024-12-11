import { useNavigate,Link} from 'react-router-dom'
import './AccountComp.css'
import {logout, EditInformation} from '../../store/Slices/userSlicer'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AccountComp(){
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('currentUser'))

    const [editing, setEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({ ...userData });
    const handleInputChange = (event) => {
        setEditedUser({ ...editedUser, [event.target.name]: event.target.value });
    };
    const user = userData.user
    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = (name, age,nationality) => {
        dispatch(EditInformation({ name, age, nationality}))
        console.log('Saving user data:', editedUser);
        setEditing(false);
        document.location.reload();
        
    };
    
    const handleCancel = () => {
        setEditing(false);
        setEditedUser({ ...user }); // Восстанавливаем исходные данные
    };
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
                    {editing ? (
                        <>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={editedUser.name || ''} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="age">User Age:</label>
                                <input type="text" id="age" name="age" value={editedUser.age || ''} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="nationality">Nationality:</label>
                                <input type="text" id="nationality" name="nationality" value={editedUser.nationality || ''} onChange={handleInputChange} />
                            </div>
                            <article className='buttons-edit'>
                                <button className='button-user edit' onClick={() =>handleSave(editedUser.name,editedUser.age,editedUser.nationality)}>Save</button>
                                <button className='button-user edit' onClick={handleCancel}>Cancel</button>
                            </article>
                            
                        </>
                        ) : (
                            <>
                                <div>
                                    <p>Name: {user.name || 'not specified'}</p>
                                </div>
                                <div>
                                    <p>Username: {user.login}</p>
                                </div>
                                <div>
                                    <p>User Age: {user.age || 'not specified'}</p>
                                </div>
                                <div>
                                    <p>Nationality: {user.nationality || 'not specified'}</p>
                                </div>
                                <button className='button-user edit' onClick={handleEdit}>Edit</button>
                            </>
                        )}
                    </div>
                    
                </div>
                <div className='buttons-div'>
                    {
                    user.role === "user                                              " ? (
                        <>
                        <Link to='/savedPilots'>
                            <button className='button-user'>Saved pilot</button>
                        </Link>
                            
                            <button className='button-user'>Comporation</button>
                            <button className='button-user'> Support</button>
                        </>
                    ):(
                        <>
                            <Link to={'/adminTable'}>
                                <button className='button-user'>Check users</button>
                            </Link>
                            
                        </>
                       
                    )}
                   
                </div>
            </article>
            <button className='button-user logout' onClick={() =>LogoutFunc()}>Logout</button>
        </main>
    )
}