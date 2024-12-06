import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

export default function BurgerMenu(){

    return (
        <div className="menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label htmlFor="burger-checkbox" className="burger"></label>
            <ul className="menu-list">
                <li><Link to="/" className='menu-item'>home</Link></li>
                <li><Link to="/group" className="menu-item">Group</Link></li>
                <li><Link to="/teams" className="menu-item">Teams</Link></li>
                <li><Link to="/pilots" className="menu-item">Pilots</Link> </li>
                <li><Link to="/news" className="menu-item">News</Link> </li>
                <li><Link to='/account' className='menu-item'>Account</Link></li>
            </ul>
        </div>
    );
};

