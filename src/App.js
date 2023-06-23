import React from "react";
import { Route, Routes } from "react-router-dom";
import AllDonators from "./Components/AllDonators/AllDonators";
import DonationForm from "./Components/DonationForm/DonationForm";
import DonationSummary from "./Components/DonationSummary/DonationSummary";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Navbar/Navbar";
import RegisterPage from "./Components/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-blue-700 to-purple-400">
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/donationSummary" element={<DonationSummary />} />
        <Route path="/allDonators" element={<AllDonators />} />
        <Route path="/donateNow" element={<DonationForm />} />
        <Route path="/registerNow" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
