import React from 'react'
import './css/Nav.css'
import {Link} from 'react-router-dom'
import logo from './images/Logo.png'
function Nav() {
    return (
        <nav className='cont'>
            <img style={{ height: 60, width: 'auto' }} src={logo}/>
            <p className="master">Master of Kitchen</p>
            <div style={{width:'auto',display:'flex', justifyContent:'space-around'}}>
            <Link className="nav-links mh2" to="/Login">
            <p className='button'>Login</p>
            </Link>
            <Link className="nav-links mh2" to="/SignUp">
            <p className='button'>Sign Up</p>
            </Link>
            <Link className="nav-links mh2" to="/Chefs">
            <p className='button'>Chefs</p>    
            </Link>
            </div>
        </nav>
    )
}

export default Nav
