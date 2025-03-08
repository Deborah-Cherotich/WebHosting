import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup (You can add authentication logic later)
    if (email && password) {
      navigate("/login"); // Redirect to the login page after successful signup
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./auth.css";
// import signupImage from "../assets/signup.png";

// const Signup = () => {
//   return (
//     <div className="auth-container">
//       {/* Left Side - Image */}
//       <div className="auth-image">
//         <img src={signupImage} alt="Signup" />
//       </div>

//       {/* Right Side - Form */}
//       <div className="auth-form">
//         <h2>Sign Up</h2>
//         <form>
//           <input type="text" placeholder="First Name" required />
//           <input type="text" placeholder="Last Name" required />
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Create Account</button>
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

