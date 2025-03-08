import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./LandingPage.css"; 
import mainImage from "../assets/main-image.png"; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-section">
        <h1>The only WordPress platform you'll ever need</h1>
        <p>Find unique domain, webhosting and WordPress tools, all in one place. Empower your business or digital agency with Hostify.</p>

        <div>
          <p>Save 75%</p>
          <p>Starting at KES 2000</p>
          <button className="get-started-btn">Get Started</button>
        </div>

        <div className="guarantee">
          <span role="img" aria-label="history" className="history-icon">
            🕰️
          </span>
          <p>30-days-money-back guarantee</p>
        </div>

        <div className="auth-links">
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </div>
      </div>

      <div className="image-section">
        <img src={mainImage} alt="Main Image" />
      </div>
    </div>
  );
};

export default LandingPage;
