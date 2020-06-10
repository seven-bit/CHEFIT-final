import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
function SignUp(props) {
    let [Name,nameUpdated] = useState('')
    let [Email,emailUpdated] = useState('')
    let [Password,passwordUpdated] = useState('')
    let [Cpassword,cpasswordupdate] = useState('')
    let [Number,numberUpdated] = useState(null)
    let [information,onSubmit]=useState({name: '' , email: '',password: '',mobile: null})
    
     const call=(event)=>{ 
       onSubmit({name:Name,email:Email,password:Password, password2:Cpassword ,mobile:Number })
       event.preventDefault()
       console.log(information)
    }
    const sendData=(data)=>{
      props.loggedInitiated(data,true)   
      props.history.push("/Dashboard")
     }
      useEffect( () => { axios.post('http://localhost:5000/api/users/register',information).then(res=>{sendData(res.data)}).catch(err=>{console.log(err.response.data)})
      }, [information])
    
    return (<>
        <div className="login-page">
        <div className="form">
          <form className="login-form">
            <h1 className='SignIn'><b>Register</b></h1>
            <input type="text"  value={Name} onChange={(event)=>nameUpdated(Name=event.target.value)} placeholder="Name" />
            <input type="email" value={Email} onChange={(event)=>emailUpdated(Email=event.target.value)} placeholder="Email" />
            <input type="tel" value={Number} onChange={(event)=>numberUpdated(Number=event.target.value)} placeholder="Phone Number"/>
            <input type="password" value={Password} onChange={(event)=>passwordUpdated(Password=event.target.value)} placeholder="Password"/>
            <input type="password" value={Cpassword} onChange={(event)=>cpasswordupdate(Cpassword=event.target.value)} placeholder="Confirm Password"/>
            <button type="submit" onClick={call}>Register</button>
            <Link to="/Login">
            <p className="message">Got a account Sign In!</p>
            </Link>
          </form>
        </div>
        
      </div>
      </>
    );
}

export default SignUp
