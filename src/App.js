import React, { useContext, useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import HomeScreen from "./screens/home-screen/home-screen";
import SignIn from "./screens/signin-screen/signin-screen";
import Signup from "./screens/signup-screen/signup-screen";
import WatchScreen from "./screens/watch-screen/watch-screen";
import ProfileScreen from "./screens/profile-screen/profile-screen";
import Signout from "./screens/signout-screen/signout-screen";

//Multi-step form component
import SignupOverview from "./components/signup-overview/signup-overview.component";
import Signupform from "./components/signup-form/signup-form.component";
import SignupPassword from "./components/signup-password/signup-password.component";
import SignupPlanOverview from "./components/signup-plan-overview/signup-plan-overview.component";
import SignupPlanForm from "./components/signup-plan-form/signup-plan-form.component";
import PaymentPicker from "./components/signup-payment-picker/signup-payment-picker.component";
import PaymentStatus from "./components/payment-status/payment-status.component";

import { AuthContext } from "./context/auth.context";
import { isUserActive } from "./utils/firebase.config";

function App() {
  const { user, loading } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user) return;

    async function checkUserStatus() {
      const response = await isUserActive(user.email);
      setIsActive(response);
    }

    checkUserStatus();
  }, [user]);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [pathname]);

  if (loading) {
    return null;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user && isActive ? <WatchScreen /> : <HomeScreen />}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="signout" element={<Signout />} />
      <Route path="/signup" element={<Signup />}>
        <Route path="registration" element={<SignupOverview />} />
        <Route path="regform" element={<Signupform />} />
        <Route path="password" element={<SignupPassword />} />
        <Route path="plan" element={<SignupPlanOverview />} />
        <Route path="planform" element={<SignupPlanForm />} />
        <Route path="paymentPicker" element={<PaymentPicker />} />
        <Route path="paymentSuccess" element={<PaymentStatus />} />
      </Route>
    </Routes>
  );
}

export default App;
