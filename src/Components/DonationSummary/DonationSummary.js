import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AllContexts/UserContext";
import DonationSummarySingle from "./DonationSummarySingle";

function DonationSummary() {
  const { user } = useContext(AuthContext);
  const [specificDonator, setSpecificDonator] = useState([]);

  // finding specific donator using email::
  useEffect(() => {
    fetch(`http://localhost:5000/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSpecificDonator(data));
  }, [user?.email]);

  if (specificDonator.length === 0) {
    return (
      <h1 className="text-white text-center text-2xl font-bold py-3">
        You have not yet donated
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-white text-center text-2xl font-bold py-3 ">
        Your Donation History
      </h1>
      <div className="text-center">
        {specificDonator.map((pd) => (
          <DonationSummarySingle
            key={pd._id}
            specificDonatorDetails={pd}
            specificDonator={specificDonator}
            setSpecificDonator={setSpecificDonator}
          />
        ))}
      </div>
    </>
  );
}

export default DonationSummary;
