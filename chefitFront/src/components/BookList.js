import React from 'react'
import ChefDisplayCard  from './ChefDisplayCard'
function BookList( {list,chefId}) {
    const BookingArray=list.map((user,i)=> {
        return <ChefDisplayCard 
        key={i}
        Name= {list[i].name}
        Phone= {list[i].mobile}
        userId={list[i].userid}
        chefId={chefId}

        />

    })
   return(
       <div style={{height: 'auto', display: 'flex', flexDirection: 'row'}} className='flex-wrap'>
           {BookingArray}
       </div>
   )
}

export default BookList
