import './Header.css'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <header>
            <div className="Logo">
                <img src="./images/Logo.png" alt="" />
            </div>
            <nav>
                <Link to='/' className='Link selected'>
                    Home
                </Link>
                <Link to='/' className='Link'>
                    Groups
                </Link>
                <Link to='/' className='Link'>
                    Teams
                </Link>
                <Link to='/' className='Link'>
                    Pilots
                </Link>
                <Link to='/' className='Link'>
                    News
                </Link>
            </nav>
        </header>
    )
}