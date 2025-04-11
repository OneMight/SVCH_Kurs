import './Header.css'
import {Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
export default function Header(){
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [activeLink,setActiveLink] = useState(location.pathname)
    const checkLogin = () =>{
        if(localStorage.getItem('token')){
            setIsLoggedIn(true)
        }
    }
    useEffect(() => {
        setActiveLink(location.pathname);
        checkLogin()

    }, [location]);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    
    return(
        <header>
            <div className="Logo">
                <img src="/images/Logo.png" alt="" />
            </div>
            <nav>
                <Link to='/'
                 className={`Link ${activeLink === '/' ? 'selected' : ''}`}
                 onClick={() => handleLinkClick('/')}
                >
                    Home
                </Link>
                <Link to='/group'
                className={`Link ${activeLink === '/group' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/group')}
                >
                    Groups
                </Link>
                <Link to='/teams'
                 className={`Link ${activeLink === '/teams' ? 'selected' : ''}`}
                 onClick={() => handleLinkClick('/teams')}
                 >
                    Teams
                </Link>
                <Link to='/pilots'
                className={`Link ${activeLink === '/pilots' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/pilots')}
                >
                    Pilots
                </Link>
                <Link to='/news'
                className={`Link ${activeLink === '/news' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/news')}
                >
                    News
                </Link>
            </nav>
            {!isLoggedIn ? null:(
                <Link to='/account'
                className='account-button'>
                    <img src="/images/AccountButton.png" alt="" />
                </Link>
            )}
           
            <BurgerMenu activeLink ={activeLink} handleChangeColor ={handleLinkClick}/>
        </header>
    )
}