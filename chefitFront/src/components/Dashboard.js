import React,{useState,useEffect} from 'react'
import axios from 'axios'
import DisplayCard from './DisplayCard'
import NavbarDashboard from './NavbarDashboard'
import tachyons from 'tachyons'
import ChefCardList from './ChefCardList'
import Scroll from './Scroll'
function Dashboard(props) {
    let [userData,updateUserData] = useState([])

    //  useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res => {updateUserData(userData=res.data)} )
    //     .catch(err=>{console.log("error")})
    // }, [])
    const signingOut=(event)=>{ 
        console.log("signingOut")
        props.signedOut()
        props.history.push("/")

    }
        if(props.loggedIn.status)
        {
          
         return (
            <div>
               <NavbarDashboard signingOut={signingOut}/>
               
                  <div style={{height: 700 }} className="pb2 mt5 bg-near-white mh6 ph5 br4 ba b--light-silver bw1">
                      <nav className="cont"> 
                      <p className="master">Our Chefs</p>
                      </nav>
                      <Scroll>
                      <ChefCardList user={props.loggedIn} />
                      </Scroll>
                  
                  </div>
            
               
            </div>
                  )
        }
        else {
            props.history.push("/Login")
            return null
             } 

// axios.get('').then(respnose=>{ console.log(response)}).catch(error=>{
//     console.log("Error")})

// axios.post('',this.state).then(response=>{ }.catch(error=>{ }))
}
export default Dashboard
