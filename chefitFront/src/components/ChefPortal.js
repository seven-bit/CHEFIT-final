import React from 'react'
import NavBarChef from './NavBarChef'
import food from './images/Food.png'
import {Link} from 'react-router-dom'
function ChefPortal(props){
    return( <div>
        <NavBarChef/>
        <div className='tc db '>
            <img style={{width:'84%', height:'auto'}} src={food}/>
            <div className="centered">
                <p>With the help of our service,reach your customer even faster</p>
                <p>Just   <var className="inside"> Chef It</var></p>
                <Link to='/Chef-Signup'>
                <p className='book'>Join us Now</p>
                </Link>
            </div>
        </div>

    </div>)
}

export default ChefPortal