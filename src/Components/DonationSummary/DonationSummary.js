import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AllContexts/UserContext";
import DonationSummarySingle from "./DonationSummarySingle";

function DonationSummary() {
  const { user } = useContext(AuthContext);
  const [specificDonator, setSpecificDonator] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/donators/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSpecificDonator(data));
  }, [user?.email]);

  console.log(specificDonator);

  return (
    <>
      <h1 className="text-white">Welcome to {user?.displayName}</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {specificDonator.map((pd) => (
          <DonationSummarySingle key={pd._id} specificDonatorDetails={pd} />
        ))}
      </div>
    </>
  );
}

export default DonationSummary;
