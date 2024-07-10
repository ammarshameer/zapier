import React, { useState, useEffect } from "react";
import "../../App.css";
import { FcGoogle } from "react-icons/fc";



const Hero = () => {
    const spans = [
        "sales outreach",
        "leads",
        "marketing campaigns",
        "customer support",
        "team handoffs",
        "app data",
        "tickets and incidents",
        "employee onboarding",
        "social posts",
        "projects"
      ];
      const [spanIndex, setSpanIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setSpanIndex((prevIndex) => (prevIndex + 1) % spans.length);
        }, 1500); 
    
        return () => clearInterval(interval); 
      }, [spans.length]);
  return (
    <div className="heroDiv">
      <h1 id="rotating-paragraph fontSize">
      Today is a great day <br /> to automate your <br/>
      {spans.map((span, index) => (
        <span
          className={`rotating-span ${index === spanIndex ? 'active' : ''}`}
        >
          {span}
        </span>
      ))}
    </h1>
      <div className="paraDiv">
        <p>
          No more waiting for developers to bring order to your apps. Use Zapier
          to tame the chaos with automation and accomplish more with less work.
        </p>
      </div>
      <div className="mt-3">
      <button className="emailBtn me-4">Start free with email</button>
      <button className="googleBtn"><FcGoogle className="me-1 mb-1"/>Start free with google</button>
      </div>
    </div>
  );
};

export default Hero;
