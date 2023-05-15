import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home-screen/home-screen";
import SignIn from "./screens/signin-screen/signin-screen";
import Signup from "./screens/signup-screen/signup-screen";

//Multi-step form component
import SignupOverview from "./components/signup-overview/signup-overview.component";
import Signupform from "./components/signup-form/signup-form.component";
import SignupPassword from "./components/signup-password/signup-password.component";
import SignupPlanOverview from "./components/signup-plan-overview/signup-plan-overview.component";
import SignupPlanForm from "./components/signup-plan-form/signup-plan-form.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />}>
        <Route path="registration" element={<SignupOverview />} />
        <Route path="regform" element={<Signupform />} />
        <Route path="password" element={<SignupPassword />} />
        <Route path="plan" element={<SignupPlanOverview />} />
        <Route path="planform" element={<SignupPlanForm />} />
      </Route>
    </Routes>
  );
}

export default App;
