import React from "react";
import WiFi from "./FooterSvg/WiFiSvg";
import Facebook from "./FooterSvg/Facebook";
import LinkedIn from "./FooterSvg/LinkedIn";
import Twiter from "./FooterSvg/Twiter";
import YouTube from "./FooterSvg/YouTube";
import image from "../Images/zapier-logo.svg"

const Footer = () => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }

  return (
    <div>
      <div className="mt-5">
        <p className="tital">Apps by Title</p>
        <p className="letter-container">
          <span>0–9</span>
          {letters.map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </p>
      </div>
      <div className="spanMainDiv row">
        <div className="col">
          <span>Top Searches</span>
          <span>Slack Integration</span>
          <span>Saleforce Integration</span>
          <span>HubSpot CRM Integration</span>
          <span>PayPal Integration</span>
          <span>Asan Integration</span>
          <span>Show more</span>
        </div>
        <div className="col">
          <span>Popular Apps</span>
          <span>Dropbox</span>
          <span>Google sheets</span>
          <span>DocuSign</span>
          <span>WordPress</span>
          <span>Office 365</span>
          <span>Show more</span>
        </div>
        <div className="col">
          <span>Trending Apps</span>
          <span>Twitch</span>
          <span>Calendy</span>
          <span>Microsoft To-Do</span>
          <span>Microsoft Outlook</span>
          <span>Medium</span>
          <span>Show more</span>
        </div>
        <div className="col">
          <span>Top Apps by Category</span>
          <span>Project Management</span>
          <span>Calander</span>
          <span>Email</span>
          <span>CRM (Customer Relationship Management)</span>
          <span>Marketing Automation</span>
          <span>Show more</span>
        </div>
        <div className="col">
          <span>Our Best Content</span>
          <span>Best Video Conferencing Apps</span>
          <span>Best Email Apps</span>
          <span>Best CRM Apps</span>
          <span>Best Note Taking Apps</span>
          <span>Best Calander Apps</span>
          <span>Show more</span>
        </div>
      </div>
      <div className="footerNav">
        <div className="d-flex">
          <p>Follow us</p>
          <div className="svgDiv">
            <Facebook />
            <LinkedIn />
            <Twiter />
            <YouTube />
            <WiFi />
          </div>
        </div>
        <div>
          <ul className="navLinks">
            <li>Pricing</li>
            <li>Help</li>
            <li>Developer Platform</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Enterprice</li>
            <li>Templates</li>
          </ul>
        </div>
      </div>
      <div className="footerNav">
        <div >
          <img src={image} alt="zapier" width="100"/>
        </div>
        <div className="d-flex">
            <p>© 2024  Zapier Inc.</p>
          <ul className="navLink">
            <li>Manage cookies<span>|</span></li>
            <li>Legal<span>|</span></li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
