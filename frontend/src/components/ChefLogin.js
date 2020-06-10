import React,{useState,useEffect} from 'react';
import './css/login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
function ChefLogin(props){
  let [Email,emailInputed]=useState('')
  let [Password,passwordInputed]=useState('')
  let [information, updateinfo] = useState({email:'',password:''})

  const loginClicked=(event)=>{
    updateinfo({email: Email, password: Password})
    event.preventDefault()
    // console.log(Email)
    // console.log(Password)

   
    
  }
  const sendData=(data)=>{
    props.loggedInitiated(data,true)   
    props.history.push("/Chef-Dashboard")
   }
  useEffect(() => { 
     console.log(information)
     axios.post('http://localhost:5000/api/chefs/login',information).then(res=>{ res.data.success === true?  sendData(res.data.token): alert("Wrong Email or Password")}).catch(err=>{console.log(err.response.data)})
   }, [information])

  return( 
                <div className="login-page">
                <div className="form">
                  <form className="login-form">
                    <h1 className='SignIn'>Sign In </h1>
                    <input type="text"  value={Email} onChange={(event)=>emailInputed(Email=event.target.value)} placeholder="Email" />
                    <input type="password" value={Password} onChange={(event)=>passwordInputed(Password=event.target.value)}placeholder="Password" />
                    <button type='submit' onClick={loginClicked}>login</button>
                    <Link to='/SignUp'>
                    <p className="message">Not registered? Create an account</p>
                    </Link>
                  </form>
                </div>
              </div>

  );
}


export default ChefLogin;