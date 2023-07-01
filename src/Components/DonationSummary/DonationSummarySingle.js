import React from 'react'
import { Link } from 'react-router-dom';

function DonationSummarySingle({specificDonatorDetails}) {

const {amount,time,date,donationCategory,email,name,paymentMethod}=specificDonatorDetails;

console.log(email);

  return (
    <div className="text-white border border-gray-300 py-11 px-4 bg-black">
    
    
    <h2>Donation Category: {donationCategory}</h2>
    <h2>Amount: {amount}</h2>
    <h2>
      Donation Period: {date} at {time}
    </h2>
    <p className="mt-2">
      <Link to="/updateDonationInfo">
        <button className="bg-green-400 px-6 py-1 rounded-sm hover:bg-red-400">
          Update
        </button>
      </Link>
    </p>
    <p>
    <button className=" px-6 py-1 bg-red-700 rounded-sm hover:bg-blue-800">
          Update
        </button>
    </p>
  </div>
  )
}

export default DonationSummarySingle