import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./components/LandingPage";
import TrustedSection from "./components/TrustedSection";
import PlanningSection from "./components/PlanningSection";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import "./App.css";

function Layout() {
  const currentLocation = useLocation(); // Rename to avoid conflict

  return (
    <>
      {/* Hide header on login page */}
      {currentLocation.pathname !== "/login" && currentLocation.pathname !== "/signup" && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trusted-section" element={<TrustedSection />} />
        <Route path="/planning-section" element={<PlanningSection />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
