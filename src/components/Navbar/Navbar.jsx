import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const isActive = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={isActive}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={isActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={isActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={isActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={isActive} >Settings</NavLink>
            </div>
        </nav>)
}

export default Navbar;