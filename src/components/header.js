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
        {/* <div className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <button>WordPress</button>
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
        </div> */}

        {/* Additional Dropdowns */}
        {["Websites", "Domains", "hosting","Email","Servers", "Other solutions"].map((item) => (
          <div 
            className="dropdown" 
            key={item}
            onMouseEnter={() => toggleDropdown(item)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button>{item} </button>
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
        <a href="/planning-section" className="nav-item">Pricing</a>
      </nav>

      {/* Right-side Menu */}
      <nav className="nav-menu-right">
        {/* Help Dropdown */}
        <div 
          className="dropdown"
          onMouseEnter={() => toggleDropdown("Help")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button>Help</button>
          {openDropdown === "Help" && (
            <div className="dropdown-content">
              <a href="#">Support</a>
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
            </div>
          )}
        </div>

        {/* Login Link */}
        <a href="/login" className="nav-item">Login</a>

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
          <button>KES</button>
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
