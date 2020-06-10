import React,{useState} from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp'
import Login from './components/login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import ChefPortal from "./components/ChefPortal"
import ChefSignUp from "./components/ChefSignUp"
import ChefLogin from "./components/ChefLogin"
import ChefDashboard from "./components/ChefDashboard.js"
function App(props){
  let [loggedIn, loggedInitiated] = useState({status: false, userId: '' , name: '' , mobile:'' })
  // let [user,userLoggedIn]=useState('')
  loggedInitiated=(data,value)=>{
    loggedIn.status= value
    loggedIn.userId = data._id
    loggedIn.name = data.name
    loggedIn.mobile = data.mobile  
    console.log(loggedIn)  
  }
  const signedOut=()=>{
    loggedIn.status=false
    loggedIn.userId=''
    console.log(loggedIn)
  }
let [chefLoggedIn,chefLoggedInitiated] = useState({status:false, chef: {id:'', requests:[]}})
  chefLoggedInitiated=(data,value)=>{
    console.log(chefLoggedIn)
    chefLoggedIn.status= value
    chefLoggedIn.chef.id= data._id
    chefLoggedIn.chef.requests=data.requests
  }
  const chefsignedOut=()=>{
    chefLoggedIn.status=false
    chefLoggedIn.chef.id= ''
    chefLoggedIn.chef.requests=[]
    console.log(chefLoggedIn)
  }
  return(
    <Router>
    <div className="App"> 
      <Switch>
      <Route exact path="/"  component={Home}/> 
      <Route path="/SignUp" render={(props)=><SignUp {...props} loggedInitiated={loggedInitiated} loggedIn={loggedIn}/>}/>
      <Route path="/Login" render={(props)=><Login {...props} loggedInitiated={loggedInitiated} loggedIn={loggedIn}/>}/>
      <Route path="/Dashboard" render={(props)=><Dashboard {...props}  signedOut={signedOut} loggedIn={loggedIn} />} />
      <Route path="/Chefs" render={ (props)=><ChefPortal {...props} loggedInitiated={chefLoggedInitiated}  /> }/>
      <Route path="/Chef-Signup" render={ (props)=> <ChefSignUp {...props} loggedInitiated={chefLoggedInitiated}/>} />
      <Route path="/Chef-Login" render={(props)=><ChefLogin {...props} loggedInitiated={chefLoggedInitiated} />}/>
      <Route path="/Chef-Dashboard" render={ (props)=> <ChefDashboard {...props} signedOut={chefsignedOut} loggedIn={chefLoggedIn} />} />
      </Switch>
    </div>
    </Router>

  )
}
export default App 
