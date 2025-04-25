import React from 'react';
import "../assets/LandingPage.css";
import heroImage from "../assets/image.png"; 
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

  const circles = [
    { width: 116, height: 116, left: 203, top: 199 },
    { width: 116, height: 116, left: 884, top: 662 },
    { width: 112, height: 112, left: 470, top: 340 },
    { width: 112, height: 112, left: -28, top: 647 },
    { width: 58, height: 58, left: 670, top: 280 },
    { width: 58, height: 58, left: 383, top: 604 },
    { width: 58, height: 58, left: 1221, top: 542 },
  ];

  return (
    <div className="container">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="background-circle"
          style={{
            width: `${circle.width}px`,
            height: `${circle.height}px`,
            left: `${circle.left}px`,
            top: `${circle.top}px`,
          }}
        />
      ))}
      <nav className="nav">
        <h1 className="logo">smart<span>merge</span></h1>
        <div className="nav-links">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#guidelines" className="nav-link">GUIDELINES</a>
        </div>
      </nav>


      <section className="hero-section">
        <div className="hero-content">
          <h1 className="title">SMARTMERGE</h1>
          <p className="subtitle">
            The ultimate solution to effortlessly merge GitHub repositories
            while preserving commits, branches, and history
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="check-circle">✓</div>
              <span>Preserve commit history</span>
            </div>
            <div className="feature-item">
              <div className="check-circle">✓</div>
              <span>Maintain branch structure</span>
            </div>
            <div className="feature-item">
              <div className="check-circle">✓</div>
              <span>Seamless integration</span>
            </div>
          </div>

          <button className="get-started-btn " onClick={() => navigate("/signup")} >GET STARTED</button>
        </div>

        <div className="hero-image-container">
          <img 
            src={heroImage} 
            alt="GitHub merge visualization" 
            className="hero-image" 
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;