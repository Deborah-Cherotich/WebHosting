// // import React, { useState } from "react";
// // import logo from "../assets/logo.png"; 
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// // const Header = () => {
// //   // State to track dropdowns
// //   const [openDropdown, setOpenDropdown] = useState(null);

// //   // Function to toggle dropdowns
// //   const toggleDropdown = (menu) => {
// //     setOpenDropdown(openDropdown === menu ? null : menu);
// //   };

// //   return (
// //     <header className="header">
// //       <div className="logo-container">
// //         <img src={logo} alt="Hostify Logo" className="logo" />
// //       </div>

// //       <nav className="nav-menu">
// //         {/* Menu Items with Dropdowns */}
// //         {["WordPress", "Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
// //           <div className="dropdown" key={item}>
// //             <button onClick={() => toggleDropdown(item)}>{item} ▼</button>
// //             {openDropdown === item && (
// //               <div className="dropdown-content">
// //                 <a href="#">Option 1</a>
// //                 <a href="#">Option 2</a>
// //                 <a href="#">Option 3</a>
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         {/* Pricing without dropdown */}
// //         <a href="#" className="nav-item">Pricing</a>

// //         {/* Help Dropdown */}
// //         <div className="dropdown">
// //           <button onClick={() => toggleDropdown("Help")}>Help ▼</button>
// //           {openDropdown === "Help" && (
// //             <div className="dropdown-content">
// //               <a href="#">Support</a>
// //               <a href="#">FAQs</a>
// //               <a href="#">Contact Us</a>
// //             </div>
// //           )}
// //         </div>

// //         {/* Login */}
// //         <a href="#" className="nav-item">Login</a>

// //         {/* Cart Icon */}
// //         <a href="#" className="cart">
// //           <FontAwesomeIcon icon={faShoppingCart} />
// //         </a>

// //         {/* Currency Dropdown */}
// //         <div className="dropdown">
// //           <button onClick={() => toggleDropdown("KES")}>KES ▼</button>
// //           {openDropdown === "KES" && (
// //             <div className="dropdown-content">
// //               <a href="#">KES</a>
// //               <a href="#">USD</a>
// //               <a href="#">EUR</a>
// //             </div>
// //           )}
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


// // import React, { useState } from "react";
// // import logo from "../assets/logo.png";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// // import './Header.css'; // Import the CSS file

// // const Header = () => {
// //   const [openDropdown, setOpenDropdown] = useState(null);

// //   const toggleDropdown = (menu) => {
// //     setOpenDropdown(openDropdown === menu ? null : menu);
// //   };

// //   return (
// //     <header className="header">
// //       <div className="logo-container">
// //         <img src={logo} alt="Hostify Logo" className="logo" />
// //       </div>

// //       <nav className="nav-menu">
// //         {/* Menu Items with Dropdowns */}
// //         {["WordPress", "Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
// //           <div className="dropdown" key={item}>
// //             <button onClick={() => toggleDropdown(item)}>{item} ▼</button>
// //             {openDropdown === item && (
// //               <div className="dropdown-content">
// //                 <a href="#">Option 1</a>
// //                 <a href="#">Option 2</a>
// //                 <a href="#">Option 3</a>
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         {/* Pricing without dropdown */}
// //         <a href="#" className="nav-item">Pricing</a>

// //         {/* Help Dropdown */}
// //         <div className="dropdown">
// //           <button onClick={() => toggleDropdown("Help")}>Help ▼</button>
// //           {openDropdown === "Help" && (
// //             <div className="dropdown-content">
// //               <a href="#">Support</a>
// //               <a href="#">FAQs</a>
// //               <a href="#">Contact Us</a>
// //             </div>
// //           )}
// //         </div>

// //         {/* Login */}
// //         <a href="#" className="nav-item">Login</a>

// //         {/* Cart Icon */}
// //         <a href="#" className="cart">
// //           <FontAwesomeIcon icon={faShoppingCart} />
// //         </a>

// //         {/* Currency Dropdown */}
// //         <div className="dropdown">
// //           <button onClick={() => toggleDropdown("KES")}>KES ▼</button>
// //           {openDropdown === "KES" && (
// //             <div className="dropdown-content">
// //               <a href="#">KES</a>
// //               <a href="#">USD</a>
// //               <a href="#">EUR</a>
// //             </div>
// //           )}
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Header.css'; // Import the CSS file

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Hostify Logo" className="logo" />
//       </div>

//       <nav className="nav-menu">
//         {/* Menu Items with Dropdowns */}
//         {["WordPress", "Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
//           <div className="dropdown" key={item}>
//             <button onClick={() => toggleDropdown(item)}>{item} ▼</button>
//             {openDropdown === item && (
//               <div className="dropdown-content">
//                 <a href="#">Option 1</a>
//                 <a href="#">Option 2</a>
//                 <a href="#">Option 3</a>
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Pricing without dropdown */}
//         <a href="#" className="nav-item">Pricing</a>
//       </nav>

//       <nav className="nav-menu-right">
//         {/* Help Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("Help")}>Help ▼</button>
//           {openDropdown === "Help" && (
//             <div className="dropdown-content">
//               <a href="#">Support</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact Us</a>
//             </div>
//           )}
//         </div>

//         {/* Login */}
//         <a href="#" className="nav-item">Login</a>

//         {/* Cart Icon */}
//         <a href="#" className="cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>

//         {/* Currency Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("KES")}>KES ▼</button>
//           {openDropdown === "KES" && (
//             <div className="dropdown-content">
//               <a href="#">KES</a>
//               <a href="#">USD</a>
//               <a href="#">EUR</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Header.css'; // Import the CSS file

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   const handleClick = () => {
//     const planningSection = document.getElementById('planning');
//     if (planningSection) {
//       planningSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Hostify Logo" className="logo" />
//       </div>

//       <nav className="nav-menu">
//         {/* Menu Items with Dropdowns */}
//         {["WordPress", "Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
//           <div className="dropdown" key={item}>
//             <button onClick={() => toggleDropdown(item)}>{item} ▼</button>
//             {openDropdown === item && (
//               <div className="dropdown-content">
//                 <a href="#">Option 1</a>
//                 <a href="#">Option 2</a>
//                 <a href="#">Option 3</a>
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Pricing without dropdown */}
//         <a href="#" className="nav-item" onClick={handleClick}>Pricing</a> {/* Link to Planning section */}
//       </nav>

//       <nav className="nav-menu-right">
//         {/* Help Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("Help")}>Help ▼</button>
//           {openDropdown === "Help" && (
//             <div className="dropdown-content">
//               <a href="#">Support</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact Us</a>
//             </div>
//           )}
//         </div>

//         {/* Login */}
//         <a href="#" className="nav-item">Login</a>

//         {/* Cart Icon */}
//         <a href="#" className="cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>

//         {/* Currency Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("KES")}>KES ▼</button>
//           {openDropdown === "KES" && (
//             <div className="dropdown-content">
//               <a href="#">KES</a>
//               <a href="#">USD</a>
//               <a href="#">EUR</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Header.css'; // Import the CSS file

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   const handleClick = () => {
//     const planningSection = document.getElementById('planning');
//     if (planningSection) {
//       planningSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Hostify Logo" className="logo" />
//       </div>

//       <nav className="nav-menu">
//         {/* Menu Items with Dropdowns */}
//         {["WordPress", "Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
//           <div className="dropdown" key={item}>
//             <button onClick={() => toggleDropdown(item)}>{item} ▼</button>
//             {openDropdown === item && (
//               <div className="dropdown-content">
//                 <a href="#">Option 1</a>
//                 <a href="#">Option 2</a>
//                 <a href="#">Option 3</a>
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Pricing without dropdown */}
//         <a href="#" className="nav-item" onClick={handleClick}>Pricing</a> {/* Link to Planning section */}
//       </nav>

//       <nav className="nav-menu-right">
//         {/* Help Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("Help")}>Help ▼</button>
//           {openDropdown === "Help" && (
//             <div className="dropdown-content">
//               <a href="#">Support</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact Us</a>
//             </div>
//           )}
//         </div>

//         {/* Login */}
//         <a href="#" className="nav-item">Login</a>

//         {/* Cart Icon */}
//         <a href="#" className="cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>

//         {/* Currency Dropdown */}
//         <div className="dropdown">
//           <button onClick={() => toggleDropdown("KES")}>KES ▼</button>
//           {openDropdown === "KES" && (
//             <div className="dropdown-content">
//               <a href="#">KES</a>
//               <a href="#">USD</a>
//               <a href="#">EUR</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Header.css';

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleHover = (menu) => {
//     setOpenDropdown(menu);
//   };

//   const handleLeave = () => {
//     setOpenDropdown(null);
//   };

//   const handleClick = () => {
//     const planningSection = document.getElementById('planning');
//     if (planningSection) {
//       planningSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Hostify Logo" className="logo" />
//       </div>

//       <nav className="nav-menu">
//         {/* WordPress Dropdown */}
//         <div
//           className="dropdown"
//           onMouseEnter={() => handleHover("WordPress")}
//           onMouseLeave={handleLeave}
//         >
//           <button>WordPress ▼</button>
//           {openDropdown === "WordPress" && (
//             <div className="dropdown-content">
//               <div className="wordpress-dropdown-content">
//                 <div className="wordpress-column">
//                   <a href="#">WordPress Hosting</a>
//                   <a href="#">Cloud Hosting <span className="new-badge">New</span></a>
//                   <a href="#">Managed Hosting</a>
//                   <a href="#">Secure Hosting</a>
//                 </div>
//                 <div className="wordpress-column">
//                   <a href="#">WooCommerce</a>
//                   <a href="#">Websites & Online Stores</a>
//                 </div>
//                 <div className="wordpress-column">
//                   <a href="#">Pro Services</a>
//                   <a href="#">Web Design</a>
//                   <a href="#">Digital Marketing</a>
//                   <a href="#">Pro Design Live Support</a>
//                   <a href="#">Website SEO Checker <span className="free-badge">FREE</span></a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <a href="#" className="nav-item" onClick={handleClick}>Pricing</a>
//       </nav>

//       <nav className="nav-menu-right">
//         {/* Help Dropdown */}
//         <div
//           className="dropdown"
//           onMouseEnter={() => handleHover("Help")}
//           onMouseLeave={handleLeave}
//         >
//           <button>Help ▼</button>
//           {openDropdown === "Help" && (
//             <div className="dropdown-content">
//               <a href="#">Support</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact Us</a>
//             </div>
//           )}
//         </div>

//         {/* Login */}
//         <a href="#" className="nav-item">Login</a>

//         {/* Cart Icon */}
//         <a href="#" className="cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>

//         {/* Currency Dropdown */}
//         <div
//           className="dropdown"
//           onMouseEnter={() => handleHover("KES")}
//           onMouseLeave={handleLeave}
//         >
//           <button>KES ▼</button>
//           {openDropdown === "KES" && (
//             <div className="dropdown-content">
//               <a href="#">KES</a>
//               <a href="#">USD</a>
//               <a href="#">EUR</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import './Header.css';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(null);

//   const handleHover = (menu) => {
//     setIsDropdownOpen(menu);
//   };

//   const handleLeave = () => {
//     setIsDropdownOpen(null);
//   };

//   const handleClick = () => {
//     const planningSection = document.getElementById('planning');
//     if (planningSection) {
//       planningSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Hostify Logo" className="logo" />
//       </div>

//       <nav className="nav-menu">
//         {/* WordPress Dropdown */}
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => handleHover("WordPress")} 
//           onMouseLeave={handleLeave}
//         >
//           <button>WordPress ▼</button>
//           {isDropdownOpen === "WordPress" && (
//             <div className="dropdown-content">
//               <div className="wordpress-dropdown-content">
//                 <div className="wordpress-column">
//                   <a href="#">WordPress Hosting</a>
//                   <a href="#">Cloud Hosting <span className="new-badge">New</span></a>
//                   <a href="#">Managed Hosting</a>
//                   <a href="#">Secure Hosting</a>
//                 </div>
//                 <div className="wordpress-column">
//                   <a href="#">WooCommerce</a>
//                   <a href="#">Websites & Online Stores</a>
//                 </div>
//                 <div className="wordpress-column">
//                   <a href="#">Pro Services</a>
//                   <a href="#">Web Design</a>
//                   <a href="#">Digital Marketing</a>
//                   <a href="#">Pro Design Live Support</a>
//                   <a href="#">Website SEO Checker <span className="free-badge">FREE</span></a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Other Menu Items */}
//         <a href="#" className="nav-item">Web Hosting</a>
//         <a href="#" className="nav-item">Solutions</a>
//         <a href="#" className="nav-item">Domains</a>
//         <a href="#" className="nav-item">Email</a>
//         <a href="#" className="nav-item">Agencies</a>

//         {/* Pricing */}
//         <a href="#" className="nav-item" onClick={handleClick}>Pricing</a>
//       </nav>

//       <nav className="nav-menu-right">
//         {/* Help Dropdown */}
//         <div 
//           className="dropdown"
//           onMouseEnter={() => handleHover("Help")}
//           onMouseLeave={handleLeave}
//         >
//           <button>Help ▼</button>
//           {isDropdownOpen === "Help" && (
//             <div className="dropdown-content">
//               <a href="#">Support</a>
//               <a href="#">FAQs</a>
//               <a href="#">Contact Us</a>
//             </div>
//           )}
//         </div>

//         {/* Login */}
//         <a href="#" className="nav-item">Login</a>

//         {/* Cart Icon */}
//         <a href="#" className="cart">
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </a>

//         {/* Currency Dropdown */}
//         <div 
//           className="dropdown"
//           onMouseEnter={() => handleHover("Currency")}
//           onMouseLeave={handleLeave}
//         >
//           <button>KES ▼</button>
//           {isDropdownOpen === "Currency" && (
//             <div className="dropdown-content">
//               <a href="#">KES</a>
//               <a href="#">USD</a>
//               <a href="#">EUR</a>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isWordPressOpen, setIsWordPressOpen] = useState(false);

  const handleHover = () => setIsWordPressOpen(true);
  const handleLeave = () => setIsWordPressOpen(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleClick = () => {
    const planningSection = document.getElementById('planning');
    if (planningSection) {
      planningSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Hostify Logo" className="logo" />
      </div>

      {/* Main Navigation */}
      <nav className="nav-menu">
        {/* WordPress Dropdown (Already Included) */}
        <div className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <button>WordPress ▼</button>
          {isWordPressOpen && (
            <div className="dropdown-content">
              <div className="wordpress-dropdown-content">
                <div className="wordpress-column">
                  <a href="#">WordPress Hosting</a>
                  <a href="#">Cloud Hosting <span className="new-badge">New</span></a>
                  <a href="#">Managed Hosting</a>
                  <a href="#">Secure Hosting</a>
                </div>
                <div className="wordpress-column">
                  <a href="#">WooCommerce</a>
                  <a href="#">Websites & Online Stores</a>
                </div>
                <div className="wordpress-column">
                  <a href="#">Pro Services</a>
                  <a href="#">Web Design</a>
                  <a href="#">Digital Marketing</a>
                  <a href="#">Pro Design Live Support</a>
                  <a href="#">Website SEO Checker <span className="free-badge">FREE</span></a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Dropdowns */}
        {["Web Hosting", "Solutions", "Domains", "Email", "Agencies"].map((item) => (
          <div 
            className="dropdown" 
            key={item}
            onMouseEnter={() => toggleDropdown(item)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button>{item} ▼</button>
            {openDropdown === item && (
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
        ))}

        {/* Pricing Link */}
        <a href="#" className="nav-item" onClick={handleClick}>Pricing</a>
      </nav>

      {/* Right-side Menu */}
      <nav className="nav-menu-right">
        {/* Help Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => toggleDropdown("Help")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button>Help ▼</button>
          {openDropdown === "Help" && (
            <div className="dropdown-content">
              <a href="#">Support</a>
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
            </div>
          )}
        </div>

        {/* Login Link */}
        <a href="#" className="nav-item">Login</a>

        {/* Cart Icon */}
        <a href="#" className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>

        {/* Currency Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => toggleDropdown("KES")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button>KES ▼</button>
          {openDropdown === "KES" && (
            <div className="dropdown-content">
              <a href="#">KES</a>
              <a href="#">USD</a>
              <a href="#">EUR</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
