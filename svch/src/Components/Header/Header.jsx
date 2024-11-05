import './Header.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
export default function Header(){
    const [activeLink,setActiveLink] = useState('/')
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return(
        <header>
            <div className="Logo">
                <img src="./images/Logo.png" alt="" />
            </div>
            <nav>
                <Link to='/'
                 className={`Link ${activeLink === '/' ? 'selected' : ''}`}
                 onClick={() => handleLinkClick('/')}
                >
                    Home
                </Link>
                <Link to='/'
                className={`Link ${activeLink === '/groups' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/groups')}
                >
                    Groups
                </Link>
                <Link to='/'
                 className={`Link ${activeLink === '/teams' ? 'selected' : ''}`}
                 onClick={() => handleLinkClick('/teams')}
                 >
                    Teams
                </Link>
                <Link to='/'
                className={`Link ${activeLink === '/pilots' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/pilots')}
                >
                    Pilots
                </Link>
                <Link to='/'
                className={`Link ${activeLink === '/news' ? 'selected' : ''}`}
                onClick={() => handleLinkClick('/news')}
                >
                    News
                </Link>
            </nav>
            <BurgerMenu activeLink ={activeLink} handleChangeColor ={handleLinkClick}/>
        </header>
    )
}