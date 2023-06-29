import React, { useContext } from "react";
import { AuthContext } from "../../AllContexts/UserContext";

function DonationSummary() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="text-white">
      <h1>Welcom {user?.email}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem
        asperiores velit reprehenderit, eum quisquam ipsa dolorem dolor
        explicabo, non, eaque harum? Vitae.
      </p>
    </div>
  );
}

export default DonationSummary;
