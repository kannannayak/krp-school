import React from "react";
import "../Copyrights/Copyrights.css";

export const Copyrights = () => {
  return (
    <div className="copy-container">
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          paddingLeft: "30px",
          margin: "0%",
        }}
      >
        Developed by Mita
      </p>
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          paddingLeft: "30px",
          paddingBottom: "10px",
          margin: "0%",
        }}
      >
        © 2025 KRP Matric Hr Sec School.| All rights reserved.
      </p>
    </div>
  );
};

export default Copyrights;
