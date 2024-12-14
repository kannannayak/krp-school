import React from "react";
import "./BecomeFranches.css";
import { useNavigate } from "react-router-dom";

export const BecomeFranches = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/FranchesRegister"); // Assuming your route is defined as /FrancheaRegister
  };

  return (
    <div className="container">
      <div className="brushstroke-container">
        <span className="brushstroke-text">
          Becoming a Mithraa Sports franchise
        </span>
      </div>
      <div className="franchise-content">
        <div className="franchise-text">
          <p>
            If you are a passionate individual looking to start a business but
            are not sure yet because of the following reasons?
          </p>
          <ul>
            <li>Unsure of What Business to Invest In?</li>
            <li>Investing in a Business is Risky?</li>
            <li>Not Sure on the Return of Investment?</li>
            <li>Concerned About Work/Life Balance?</li>
            <li>Need Clarity and Guidance?</li>
            <li>Worried About Marketing and Attracting Customers?</li>
            <li>Uncertain About Managing Operations?</li>
            <li>Need a Business that Aligns with Your Values?</li>
          </ul>
        </div>
        <div className="franchise-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r7uBj4yaL_8?si=aCMl5rygl-aSEScE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <button className="regbutton" onClick={handleNavigate}>
        Apply for a franchise - Register here!
      </button>
      <div></div>
    </div>
  );
};

export default BecomeFranches;
