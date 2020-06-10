import React from 'react'
import  ChevNavDashboard from './ChevNavDashboard'
import BookList from './BookList'
function ChefDashboard(props) {

    const signingOut=(event)=>{ 
        console.log("signingOut")
        props.signedOut()
        props.history.push("/")

    }
    if(props.loggedIn.status)
        {
    return (
        <div>
           <ChevNavDashboard signingOut={signingOut}/>
           <p> {console.log(props.loggedIn)} </p>
           <div style={{minHeight: 600 }} className=" pb2 mt5 bg-near-white mh6 db ph5 br4 ba b--light-silver bw1">
                      <nav className="cont"> 
                      <p className="master">Your Recieved Bookings</p>
                      </nav>
                      <div className="tc mt4  flex space-around">
                      {/* <DisplayCard/>
                      <DisplayCard/>
                      <DisplayCard/>
                      <DisplayCard/>
                      <DisplayCard/>
                      <DisplayCard/> */}
                      {   props.loggedIn.chef.requests.length === 0 ? <h2 className='tc'>Currently you have no Bookings!</h2>:<BookList list={props.loggedIn.chef.requests} chefId={props.loggedIn.chef.id}/>}
                      </div>
                  </div>
        </div>
    )
}
else {
    props.history.push("/Chef-Login")
    return null
     } 
}
export default ChefDashboard
