import React from "react";
import "./Volunteer.css";
import volunteerPhoto from "../../images/volunteer.jpg";
import { Link } from "react-router-dom";
function Volunteer() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-evenly md:items-center  mt-5  volunteer-bg">
      {/* Volunteer photo */}
      <div className="w-1/2 h-400 ">
        <img
          className="w-full h-full py-10 rounded-3xl"
          src={volunteerPhoto}
          alt="volunteer"
        />
      </div>

      {/* Button & description for registration */}
      <div className="flex flex-col items-start text-white mt-4">
        <h1 className="text-heading text-xl md:text-4xl">Reviving The Ummah</h1>
        <h2 className="text-font text-lg">
          "Making A Difference In Rural Bengal
          <br /> Food Basket Project"
        </h2>
        <p className="mt-4">
          <Link to="/volunteerRegistration">
            <button className="bg-red-600 hover:bg-green-600 px-4 py-2 rounded-lg">
              Volunteer Registration
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Volunteer;
