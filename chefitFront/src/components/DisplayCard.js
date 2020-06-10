import React,{useState,useEffect} from 'react'
import tachyons from 'tachyons'
import axios from 'axios'
function DisplayCard(props) {
    let [info,updateInfo] = useState({chefId:'',userId:'',name:'',mobile: null})
    let [change,onClickChange]= useState(0)
    const buttonChange=(event)=>{
        updateInfo({chefId: props.chefId , userId: props.user.userId, name: props.user.name,mobile: props.user.mobile})
        onClickChange(~(change))


    }
    useEffect(() => { 
        console.log(info)
        axios.post('http://localhost:5000/api/users/select',info).then(res=>{ console.log(res.data)}).catch(err=>{console.log(err.response.data)})
      }, [info])
    return (
        <div className=" tc mh2 shadow-2 bg-white black mt3 mb2 ml1 bw1 grow h5 w5">
            <nav className="cont">
    <h3 className="f4  mb0 ml0 mr0 mt0">{props.Name}</h3>
            </nav>
            <div className="tl pa2">
    <p className="f4 mb2 mt3">Speciality : {props.Speciality}</p>
             <p className="f4 mb2 mt3">Phone : {props.Phone} </p>
             </div>
             <div className="pointer">
                 { change === 0 ? (<p onClick={buttonChange} className="f4 grow no-underline br-pill ph4 pv2 mb2 dib white bg-black">Book Now</p>)
                 : (<p className="f4 grow no-underline br-pill ph4 pv2 mb2 dib white bg-green">Booked</p>) }
            
            </div>
        </div>
    )
}

export default DisplayCard
