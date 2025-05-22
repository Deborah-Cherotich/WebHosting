import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Import CSS
import backImage from "../assets/backimage.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (email === "test@example.com" && password === "password") {
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <img src={backImage} alt="Side Image" className="side-image1" />
      <div className="signup-form">
        <h2>SIGN UP</h2>
        <p className="p-text">
            Please Login to continue so as to enjoy our services
          </p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
        <div className="input-group">
            <label>FirstName:</label>
            <input
              type="text"
              placeholder="Enter your FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>LastName:</label>
            <input
              type="text"
              placeholder="Enter your LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Logging in..." : "Sign UP"}
          </button>
          <p className="signin-text">
            Don't have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
      
    </div>
  );
};

export default Signup;
