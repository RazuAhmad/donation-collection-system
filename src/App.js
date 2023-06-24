import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AllDonators from "./Components/AllDonators/AllDonators";
import DonationForm from "./Components/DonationForm/DonationForm";
import DonationSummary from "./Components/DonationSummary/DonationSummary";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Navbar/Navbar";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import SignInPage from "./Components/SignInPage/SignInPage";

function App() {
  return (
    <div className="app_container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donationSummary" element={<DonationSummary />} />
        <Route path="/allDonators" element={<AllDonators />} />
        <Route path="/donateNow/:id" element={<DonationForm />} />
        <Route path="/donateNow" element={<DonationForm />} />
        <Route path="/registerNow" element={<RegisterPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
