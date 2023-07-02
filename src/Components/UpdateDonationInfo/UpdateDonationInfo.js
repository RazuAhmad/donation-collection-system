import { Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateDonationInfo() {
const [specificDonators,setspecificDonators]=useState({})
  const { register, handleSubmit, reset } = useForm();
  const {id}=useParams();
  
  const navigate=useNavigate();
  
  useEffect(()=>{
    fetch(`https://donation-collection-server-production.up.railway.app/donators/${id}`)
    .then(res=>res.json())
    .then(data=>
      setspecificDonators(data)
     
      
      )
  },[id])

  

  const {amount,donationCategory,name,email,paymentMethod}=specificDonators;


  const onSubmit = (data) => {

    const currentDate = new Date();
    data.date = currentDate.toLocaleDateString();
    data.time = currentDate.toLocaleTimeString();
    data.email = email;
    data.name = name?.displayName;
// console.log(data);
    // Update data method here::
    fetch(`https://donation-collection-server-production.up.railway.app/donators/${id}`,{
          method:"PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data);

          if(data.modifiedCount>0 ){
            alert("Your Information has been updated")

            reset();
            navigate('/summary')
            
          }

          if(data.modifiedCount===0){
            alert("You haven't updated anything");
            
          }
        })

    
  }

  if (!donationCategory) {
    return <div>
            <h1 className='text-white text-center font-bold py-9 ' >Loading.........</h1>
        <Spinner className="h-16 w-16 m-auto text-blue-500/10" />
        </div>
         // Display a loading message while fetching the data
  }

  return (
    <div className='bg-green-600'>
      <div className="container mx-auto p-4 h-full ">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center mt-9">
          Update Your Information
        </h2>
        <h3 className=" font-semibold mb-4 text-white text-center ">
          
        </h3>
      </div>

      {/* Form starts from here */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-blue-gray-600 p-8 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Payment Method
          </label>

          
           <select
                required
                defaultValue={paymentMethod}
                {...register("paymentMethod")}
                className="w-full border border-blue-900 rounded px-3 py-2"
              >
                <option value="">Select category</option>
                <option value="bkash">Bkash</option>
                <option value="rocket">Rocket</option>
                <option value="nagad">Nagad</option>
                <option value="paypal">Paypal</option>
              </select>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category of Donation
          </label>

          <select
                required
                id='donationCategory'
              defaultValue={donationCategory}
                {...register("donationCategory")}
                className="w-full border border-blue-900 rounded px-3 py-2"
              >
                <option value="">Select category</option>
                <option value="mosqueComplex">Mosque Complex</option>
                <option value="zakat">Zakat</option>
                <option value="flood">Flood Appeal</option>
              </select>

        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 font-medium">
            Donation Amount
          </label>
          <input
            type="number"
            id="amount"
            defaultValue={amount}
            placeholder="enter your amount"
            className="w-full border border-blue-900 rounded px-3 py-2"
            min="100"
            {...register("amount")}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded px-4 py-2 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600"
        >
          Update
        </button>
      </form>

    </div>
  )
}

export default UpdateDonationInfo