import React from "react";
import "./CEOMessage.css"; // Assuming CSS for styling is in CeoMessage.css
import avarat from "../Images/avatar.png";

const CeoMessage = () => {
  return (
    <div className="ceo-message-container">
      <h1 className="heading">Dear SRK family members,</h1>

      <div className="content-wrapper">
        <div className="message">
          <p>
            A school is more than simply a physical location. More than that is
            present. Everyone must play a part to ensure that the critical years
            of a child’s life called schooling are completed, from the security
            guards at the gate to the final housekeeping staff. We practically
            have an ideal team in our SRK, and they have worked tirelessly for
            years to make it succeed. Everyone on this team is aware of the
            utilitarian concept, which states,{" "}
            <em>
              "Actions should be taken to maximise the good for the greatest
              number of people."
            </em>
          </p>
          <p>
            Senior, the administrative staff members who carry voluntary social
            responsibility include the principal and the administrative officer.
            This campus has benefited over the years from their guidance in
            establishing norms, standards, instilling attitudes, and moulding
            characters.
          </p>
          <p>
            Though We want to congratulate you all even though we still have
            long-term and short-term objectives to accomplish and work hard to
            do so. Getting things right is being efficient. Effectiveness is
            doing the appropriate actions. Let’s attempt to do both so that we
            can advance.
          </p>
          <p className="best-wishes">My best wishes for the academic year!</p>
        </div>

        <div className="ceo-profile">
          <img
            src={avarat}
            // Replace with the actual image URL or import
            alt="CEO"
            className="ceo-image"
          />
          <div className="ceo-details">
            <p>
              <strong>Er.Prakash M.E.,</strong>
            </p>
            <p>CEO- Chief Executive Officer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
