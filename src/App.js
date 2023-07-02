import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import DonationForm from "./Components/DonationForm/DonationForm";
import DonationSummary from "./Components/DonationSummary/DonationSummary";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Navbar/Navbar";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import SignInPage from "./Components/SignInPage/SignInPage";
import UserContext from "./AllContexts/UserContext";
import PrivateRoute from "./Routes/PrivateRoute";
import AllDonators from "./Components/AllDonators/AllDonators";
import UpdateDonationInfo from "./Components/UpdateDonationInfo/UpdateDonationInfo";
import VolunteerRegistration from "./Components/Volunteer/VolunteerRegistration/VolunteerRegistration";

function App() {
  return (
    <div className="app_container">
      <UserContext>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donationSummary" element={<DonationSummary />} />
          <Route path="/allDonators" element={<AllDonators />} />
          <Route
            path="/donatenow/:id"
            element={
              <PrivateRoute>
                <DonationForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/donatenow"
            element={
              <PrivateRoute>
                <DonationForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/summary"
            element={
              <PrivateRoute>
                <DonationSummary />
              </PrivateRoute>
            }
          />

          <Route
            path="/updateDonationInfo/:id"
            element={<UpdateDonationInfo />}
          />

          <Route path="/registerNow" element={<RegisterPage />} />
          <Route path="/signIn" element={<SignInPage />} />

          <Route
            path="/volunteerRegistration"
            element={<VolunteerRegistration />}
          />
        </Routes>
      </UserContext>
    </div>
  );
}

export default App;
