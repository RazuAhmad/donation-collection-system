import React from "react";

function SingleDonator({ donatorDetails }) {
  const { email, date, time, donationCategory, amount } = donatorDetails;
  return (
    <div className="text-white border border-gray-300 py-11 px-4 bg-black">
      <h1>Donator's email: {email}</h1>
      <h2>Donation Category: {donationCategory}</h2>
      <h2>Amount: {amount}</h2>
      <h2>
        Donation Period: {date} at {time}
      </h2>
    </div>
  );
}

export default SingleDonator;
