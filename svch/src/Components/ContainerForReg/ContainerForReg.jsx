 import Header from '../Header/Header'
 import './ContainerForReg.css'
 import { Link, useNavigate } from 'react-router-dom'
 import Input from '../ReadyToUseComponents/Input.jsx'
 import {registration, setCurrentUser} from '../../store/Slices/userSlicer.js'
 import { useState,useCallback } from 'react'
 import {useDispatch,useSelector} from 'react-redux'

 export default function ContainerForRegLog(){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const [login, setlogin] = useState('')
    const {error,status} = useSelector(state => state.users)
    const currentUser = useSelector(state => state.users.currentUsers)
    const handleChangeEmail = useCallback((e) => {
        setemail(e.target.value);
    });
    const handleChangeLogin = useCallback((e) => {
        setlogin(e.target.value);
    });
    const handleChangePassword = useCallback((e) => {
        setpassword(e.target.value);
    });
    const handleChangeCPassword = useCallback((e) => {
        setCpassword(e.target.value);
    });

    const checkPasswords = (p,cp) =>{
        if(p !== cp){
            alert('Passwod must be the same')
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        checkPasswords(password,Cpassword)
        const resultAction = await dispatch(registration({email,password,login}));
        if(error){
            alert(error)
        }
        else{
            console.log("Результат регистрации:", resultAction.payload);
            dispatch(setCurrentUser(resultAction.payload))
            localStorage.setItem('token',resultAction.payload.accessToken);
            localStorage.setItem('currentUser',resultAction.payload)
            const user = localStorage.getItem('currentUser')
            console.log(user.user)
            navigate('/')
        }
        
    };

   return(
    <main className='container-for-reg-log'>
        <Header/>
        <section className='flex-con'>
            <article className='article-for-form'>      
                <img src="./images/registrationPhoto.png" alt=""  className='img width'/>
                <div className='switch'>
                    <p>switch to
                        <Link to='/logining' className='span'>
                        <span className='span'> login</span>
                        </Link>
                    </p>
                </div>
                <form action="register" onSubmit={handleSubmit} className='registration-form width'>
                    <h3>registration</h3>
                    <div className='inputs'>
                        <input className='input-form' type='Email' placeholder='Entire your email' onChange={handleChangeEmail} value={email}/>
                        <input className='input-form' type='text' placeholder='Entire your login'onChange={handleChangeLogin} value={login}></input>
                        <input className='input-form' type='password' placeholder='Password' onChange={handleChangePassword} value={password}></input>
                        <input className='input-form' type='password' placeholder='Confirm password' onChange={handleChangeCPassword} value={Cpassword}></input>
                    </div>
                    <input type='submit' className='reg-button' value={'Register'}/>
                </form>
            </article>
        </section>
    </main>
   )
 }