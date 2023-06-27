import React, { useEffect, useState } from 'react'
import SingleDonator from './SingleDonator/SingleDonator';

function AllDonators() {
  const [allDonatorsList,setAllDonatorsList]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/donators')
    .then(res=>res.json())
    .then(data=>setAllDonatorsList(data))
  },[])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        {
          allDonatorsList.map((pd,index)=><SingleDonator donatorDetails={pd} key={index} />)
        }
    </div>
  )
}

export default AllDonators