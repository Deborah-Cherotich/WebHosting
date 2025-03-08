import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true); // Start loading

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Mock login logic (you can replace with real authentication logic)
    if (email === "test@example.com" && password === "password") {
      navigate("/"); // Redirect to home if login is successful
    } else {
      setError("Invalid email or password."); // Set error if login fails
    }

    setLoading(false); // Stop loading after logic
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {/* Show error if any */}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* Show loading text */}
        </button>
      </form>
    </div>
  );
};

export default Login;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./auth.css";
// import loginImage from "../assets/login.png";

// const Login = () => {
//   return (
//     <div className="auth-container">
//       {/* Left Side - Image */}
//       <div className="auth-image">
//         <img src={loginImage} alt="Login" />
//       </div>

//       {/* Right Side - Form */}
//       <div className="auth-form">
//         <h2>Login</h2>
//         <form>
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


