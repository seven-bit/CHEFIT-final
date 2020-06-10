// import React from 'react'

// import logo from './images/Logo.png'

// function Home(props) {
//     return (<div>
//         <Nav/>
//         <div class='Header'>
//         <img class='CentreLogo' alt='ChefIt-Logo' src={logo} />
//         </div>
//         <div class='MiddleBody'>
//             <img class='Food'alt='background' src={food}/>
//         </div>
//     </div>
//     )
// }

// export default Home

import React from 'react'
import food from './images/Food.png'
import './css/FrontEnd.css'
import Nav from './Nav'
import tachyons from 'tachyons'
import {Link} from 'react-router-dom'
function Home() {
    return (<div>
        <Nav/>
        <div className='tc db '>
            <img style={{width:'84%', height:'auto'}} src={food}/>
            <div className="centered">
                <p>We can not bring your mom at your place to cook, but you can book a cook</p>
                <p>Just   <var className="inside"> Chef It</var></p>
                <Link to='/Login'>
                <p className='book'>Book Now</p>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Home