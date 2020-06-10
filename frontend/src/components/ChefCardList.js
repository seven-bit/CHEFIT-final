import React,{useState,useEffect} from 'react';
import axios from 'axios'
import DisplayCard from './DisplayCard';
function ChefCardList(props) {
    let [list,FillArray]=useState([])
    const displayList=()=>{
        const chefList=list.map((userd,i)=> {
            return <DisplayCard 
            key={i}
            user={props.user}
            chefId={list[i]._id}
            Name= {list[i].name}
            Phone= {list[i].mobile}
            Speciality={list[i].speciality}
            />
        })
        return (
            <div style={{height: 'auto', display: 'flex', flexDirection: 'row'}} className='flex-wrap'>
                {console.log(list)}
              {chefList}
            </div>
        )
    }
    useEffect(() => { 
        axios.get('http://localhost:5000/api/chefs/allchefs').then(res=>{ FillArray( Object.values(res.data)) }).catch(err=>{console.log(err.response.data)})
      }, [])

    
    return (
        <>
            { displayList() }
        </>
    )
}

export default ChefCardList
