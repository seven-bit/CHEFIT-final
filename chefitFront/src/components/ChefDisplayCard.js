import React,{useState,useEffect} from 'react'
import axios from 'axios'
function ChefDisplayCard ({Name,Phone,chefId,userId}) {
    let[info,updateInfo]=useState({chefId:'',name:'',mobile:null,userId:''})
    let [change,onClickChange]= useState(0)

    const clicked=(event)=>{
        updateInfo({chefId: chefId , name:Name,mobile:Phone,userId:userId})
        console.log(chefId)
        onClickChange(~(change))
        alert('Congratulations! You have confirmed a booking.Contact the user for time date and price of service. ')

    }
    useEffect( () => { axios.post('http://localhost:5000/api/chefs/accept',info).then(res=>{console.log(res.data)}).catch(err=>{console.log(err.response.data)})
}, [info])
    return (
        <div className=" tc mh2 shadow-2 bg-white black mt3 mb2 ml1 bw1 grow h5 w5">
            <nav className="cont">
                 <h3 className="f4  mb0 ml0 mr0 mt0">{Name}</h3>
            </nav>
            <div className="tl pa2">
                <p className="f4 mb2 mt3">Phone : {Phone}</p>
             </div>
             <div className="pointer">
                 { change === 0 ? (<p onClick={clicked}className="f4 grow no-underline br-pill ph4 pv2 mb2 dib white bg-black">Pending</p>)
                 : (<p className="f4 grow no-underline br-pill ph4 pv2 mb2 dib white bg-green">Confirmed</p>)
    }
            </div>
        </div>
    )
}

export default ChefDisplayCard 
