import React from 'react'
import tachyons from 'tachyons'
import logo from './images/Logo.png'
function ChevNavDashboard(props) {
    return (
        <nav className='cont'>
            <img style={{ height: 60, width: 'auto' }} src={logo}/>
            <p className="master">Welcome chef!</p>
            <p className="button" onClick={props.signingOut}>Sign Out</p>
        </nav>
    )
}

export default ChevNavDashboard
