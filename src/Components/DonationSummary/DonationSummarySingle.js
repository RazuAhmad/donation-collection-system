import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DonationSummarySingle({
  specificDonatorDetails,
  specificDonator,
  setSpecificDonator,
}) {
  const { _id, amount, time, date, donationCategory, paymentMethod } =
    specificDonatorDetails;

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:5000/donators/deleteSingleItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("You have Deleted Successfully!!");
          const remainingItems = specificDonator.filter((pd) => pd._id !== id);
          setSpecificDonator(remainingItems);
        }
      });
  };

  return (
    <div className="text-white border border-gray-300 py-11 px-4 bg-black flex justify-center mb-4">
      <div>
        <h2>Donation Category: {donationCategory}</h2>
        <h2>Payment Method: {paymentMethod}</h2>
        <h2>Amount: {amount}</h2>
        <h2>
          Donation Period: {date} at {time}
        </h2>
      </div>

      <div className="flex justify-evenly ">
        <p className="mr-1">
          <Link to={`/updateDonationInfo/${_id}`}>
            <button className="bg-green-400 px-3 py-1 rounded-sm hover:bg-red-400">
              Update
            </button>
          </Link>
        </p>

        <p>
          <button
            onClick={() => handleDeleteItem(_id)}
            className=" px-3 py-1 bg-red-700 rounded-sm hover:bg-blue-800"
          >
            Delete Item
          </button>
        </p>
      </div>
    </div>
  );
}

export default DonationSummarySingle;
