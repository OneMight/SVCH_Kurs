 import Header from '../Header/Header'
 import './ContainerForReg.css'
 import { Link } from 'react-router-dom'
 import Input from '../ReadyToUseComponents/Input.jsx'
 export default function ContainerForRegLog(){
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
                <div action="register" className='registration-form width'>
                    <h3>registration</h3>
                    <div className='inputs'>
                        <Input type='Email' placeholder='Entire your email'></Input>
                        <Input type='text' placeholder='Entire your login'></Input>
                        <Input type='password' placeholder='Password'></Input>
                        <Input type='password' placeholder='Confirm password'></Input>
                    </div>
                    <button className='reg-button'>register</button>
                </div>
            </article>
        </section>
    </main>
   )
 }