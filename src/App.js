// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure to import these
// import Header from "./components/header";
// import LandingPage from "./components/LandingPage";
// import TrustedSection from "./components/TrustedSection";
// import PlanningSection from "./components/PlanningSection";
// import Signup from "./auth/Signup";  
// import Login from "./auth/Login";    
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <TrustedSection/>
//         <PlanningSection/>
//         {/* <Route path="/TrustedSection" element={<TrustedSection />} />
//         <Route path="/PlanningSection" element={<PlanningSection />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/header";
import LandingPage from "./components/LandingPage";
import TrustedSection from "./components/TrustedSection";
import PlanningSection from "./components/PlanningSection";
import Signup from "./auth/Signup";  
import Login from "./auth/Login";    
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trusted-section" element={<TrustedSection />} />  {/* ✅ Fixed */}
        <Route path="/planning-section" element={<PlanningSection />} />  {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
}

export default App;



// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure to import these
// // import Header from "./components/header";
// // import LandingPage from "./components/LandingPage";
// // import TrustedSection from "./components/TrustedSection";
// // import PlanningSection from "./components/PlanningSection";
// // import Signup from "./auth/Signup";  // Import the Signup component
// // import Login from "./auth/Login";    // Import the Login component
// // import "./App.css";

// // function App() {
// //   return (
// //     <Router>
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/trusted" element={<TrustedSection />} />
// //         <Route path="/planning" element={<PlanningSection />} />
// //         {/* Add more routes if needed */}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import LandingPage from "./components/LandingPage";
// import TrustedSection from "./components/TrustedSection";
// import PlanningSection from "./components/PlanningSection";
// import Signup from "./auth/Signup";  
// import Login from "./auth/Login";    
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Main Website Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/trusted" element={<TrustedSection />} />
//         <Route path="/planning" element={<PlanningSection />} />

//         {/* Authentication Routes - Fullscreen Pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";  // Import Header
// import LandingPage from "./components/LandingPage";
// import TrustedSection from "./components/TrustedSection";
// import PlanningSection from "./components/PlanningSection";
// import Signup from "./auth/Signup";  
// import Login from "./auth/Login";    
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       {/* Add Header here, so it will be displayed across all pages */}
//       <Header />

//       <Routes>
//         {/* Main Website Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/trusted" element={<TrustedSection />} />
//         <Route path="/planning" element={<PlanningSection />} />

//         {/* Authentication Routes - Fullscreen Pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";  // Import Header
// import LandingPage from "./components/LandingPage";
// import TrustedSection from "./components/TrustedSection";  // Ensure correct import paths
// import PlanningSection from "./components/PlanningSection";  // Ensure correct import paths
// import Signup from "./auth/Signup";  
// import Login from "./auth/Login";    
// import "./App.css";

// function App() {
//   return (
//     <Router>
//        <Routes>
//        <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<Signup />} />
//      <Route path="/login" element={<Login />} />
//        <Route path="/trusted" element={<TrustedSection />} />
//        <Route path="/planning" element={<PlanningSection />} />
//        {/* Add more routes if needed */}
//      </Routes>
//       <Header />

//       <Routes>
//         {/* Main Website Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/trusted" element={<TrustedSection />} />
//         <Route path="/planning" element={<PlanningSection />} />

//         {/* Authentication Routes - Fullscreen Pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";  // Ensure correct import path
// import LandingPage from "./components/LandingPage";  // Ensure correct import path
// import TrustedSection from "./components/TrustedSection";  // Ensure correct import path
// import PlanningSection from "./components/PlanningSection";  // Ensure correct import path
// import Signup from "./auth/Signup";  // Ensure correct import path
// import Login from "./auth/Login";    // Ensure correct import path
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Header /> {/* This will appear on all pages */}

//       <Routes>
//         {/* Main Website Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/trusted" element={<TrustedSection />} />
//         <Route path="/planning" element={<PlanningSection />} />

//         {/* Authentication Routes - Fullscreen Pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import LandingPage from "./components/LandingPage";
// import TrustedSection from "./components/TrustedSection";
// import PlanningSection from "./components/PlanningSection";
// import Signup from "./auth/Signup";
// import Login from "./auth/Login";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Header /> {/* Header placed inside Routes */}

//       <Routes>
//         {/* Main Website Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/trusted" element={<TrustedSection />} />
//         <Route path="/planning" element={<PlanningSection />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;