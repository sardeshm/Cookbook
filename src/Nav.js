import React from  'react';
import {Link, NavLink} from 'react-router-dom';





function Nav() {
    const navStyle ={
        color: 'white'
    };
    return (
        <nav >


    <Link style={navStyle} to='/'>Home</Link>
    <Link style={navStyle} to='/Indian'>Indian</Link>
    <Link style={navStyle} to='/Mexican'>Mexican</Link>
    <Link style={navStyle} to='/Italian'>Italian</Link>
    <Link style={navStyle} to='/Thai'>Thai</Link>

    
   

        </nav>
    )
}
export default Nav;