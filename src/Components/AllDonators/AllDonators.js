import React, { useEffect, useState } from 'react'
import SingleDonator from './SingleDonator/SingleDonator';

function AllDonators() {
  const [allDonatorsList,setAllDonatorsList]=useState([]);

  useEffect(()=>{
    fetch('https://donation-collection-server-production.up.railway.app/donators')
    .then(res=>res.json())
    .then(data=>setAllDonatorsList(data))
  },[])


  return (
    <>
    <h1 className='text-white text-center text-2xl font-bold py-3'>Here is Our All Donators</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          allDonatorsList.map((pd,index)=><SingleDonator donatorDetails={pd} key={index} />)
        }
    </div>
    </>
  )
}

export default AllDonators