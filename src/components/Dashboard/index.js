import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./LandingPage.css";
import mainImage from "../assets/sideimage.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* New green div */}
      <div className="green-box">
       <p style={{ color: 'white', fontSize: '18px',marginLeft:'50px',marginTop:'30px' }}>find your new domain</p>
       <div style={{marginLeft:'231px',top:'23px',width:'70px',height:'40px',backgroundColor:'orange',position:'absolute' }}>
        <p style={{ color: 'white', fontSize: '14px',marginLeft:'10px',marginTop:'9px' }}>WWW.</p>
       </div>
       <input type="text" className="domain-input" placeholder="Mydomain.c.o.ke" />
       <button className="check-domain-btn">Check domain availability</button>
      </div>

      <div className="green-box1">
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'0',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>.africa <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'200px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>ac.ke <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'400px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>co.ke <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'600px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>.com <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'780px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>.or.ke <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'970px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>.org <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
       <a href="" style={{ color: 'black', fontSize: '20px',marginLeft:'1130px',top:'10px',position:'absolute',textDecoration:'none',fontWeight:'bold' }}>.ug <span style={{ color: 'grey', fontSize: '19px',top:'5px',marginLeft:'10px'}}>ksh 1,000</span></a>
      </div>
       
      <div className="text-section">
        <h1>The only WordPress platform you'll ever need</h1>
        <p>
          Find unique domain, webhosting and WordPress tools, all in one place.
          Empower your business or digital agency with Hostify.
        </p>

        <div>
          <p>Save 75%</p>
          <p>Starting at KES 2000</p>
          <a href="/signup">
            <button className="get-started-btn">Get Started</button>
          </a>
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
