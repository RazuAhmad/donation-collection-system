import React from "react";
import { Link } from "react-router-dom";


function SingleDonator({ donatorDetails }) {
  const { name, email, date, time, donationCategory, amount } = donatorDetails;
  return (
    <div className="text-white border border-gray-300 py-11 px-4 bg-black">
      <h1>Donator's Name: {name}</h1>
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
    </div>
  );
}

export default SingleDonator;
