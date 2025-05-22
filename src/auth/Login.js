import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Import CSS
import backImage from "../assets/backimage.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <div className="login-form">
        <h2>SIGN IN</h2>
        <p className="p-text">
            Please Login to continue so as to enjoy our services
          </p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="signup-text">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
      <img src={backImage} alt="Side Image" className="side-image" />
    </div>
  );
};

export default Login;
