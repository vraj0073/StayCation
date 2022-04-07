/*
Author: Prarthana Parmar
Description: This component creates a sidebar to help user navigate between options provided.
*/



import React from "react";
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';
import { IconContext } from 'react-icons';
import { useNavigate } from "react-router-dom";

const Sidebar = (props) =>{
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const navigate = useNavigate();

    return(
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar' id='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar} >
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li className = 'nav-text a'>
                    <Link to = "/createlisting" className = 'menu-bars' onClick = {props.createlisting}>
                        Create Listing
                    </Link>
                </li>
                <li className = 'nav-text a'>
                    <Link to = "/viewlisting" className = 'menu-bars' onClick = {props.viewlisting}>
                        View Listing
                    </Link>
                </li>
            </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
}

export default Sidebar;