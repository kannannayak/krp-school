import React, { useState } from "react";
import logo from "../Images/mithraa.png";
import "../Footerdetail/Footerdetails.css";
import address from "../Images/location-pin.png";

export const Footerdetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    if (inputPhoneNumber.length <= 10) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("comments", formData.comments);
      formDataObj.append("phone", phoneNumber);

      const response = await fetch(
        "https://themithraa.com/RestApi/WebApi/comments.php",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          comments: "",
        });
        setPhoneNumber("");
        window.alert("Form submitted successfully!");
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.message || "Failed to submit form data");
    }
  };

  return (
    <div className="footerdetail">
      <div className="contact-section">
        <img src={logo} alt="Mithraa logo" className="logo" />
        <div className="contact-info">
          <p className="mt-5">
            <strong>Contact Us</strong>
          </p>
          <p>📞 04283 254 502</p>
          <p>✉️ info@krpschool.com, support@krpschool.com</p>
          <p>
            <img src={address} alt="Address Icon" width="20" height="20" />
            <span style={{ marginLeft: "5px" }}>
              Bhavani Main Road, Pachampalayam, Komarapalayam Taluk,{" "}
            </span>
            <br></br>
            <span style={{ marginLeft: "25px" }}>
              Padaiveedu, Tamil Nadu 637303{" "}
            </span>
          </p>
          <ul class="wrapper">
            <li class="icon email">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@themithraa.com"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-link"
              >
                <span class="tooltip">Email</span>
                <svg
                  style={{ color: "white" }}
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path d="M32,33.37a1,1,0,0,1-.53-.15L10,19.57V48a4,4,0,0,0,4,4H50a4,4,0,0,0,4-4V19.57L32.53,33.22A1,1,0,0,1,32,33.37Zm0-4.74,22-14.66H10ZM50,10H14a4,4,0,0,0-4,4v.64l22,14.66L54,14.64V14A4,4,0,0,0,50,10Z"></path>
                </svg>
              </a>
            </li>

            <li class="icon whatsapp">
              <span class="tooltip">WhatsApp</span>
              <a
                href="https://wa.me/9087777972"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ color: "white" }}
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="whatsapp"
                >
                  <path d="M24,3.5C13.45,3.5,5,11.95,5,22.5c0,3.77,1.25,7.27,3.39,10.12L5.5,42.5l9.71-2.86C18.29,41.96,21.07,43,24,43c10.55,0,19-8.45,19-19S34.55,3.5,24,3.5z M24,38c-2.68,0-5.19-0.75-7.32-2.05l-0.52-0.31L10.5,38.5l1.87-5.55l-0.36-0.52C9.92,29.83,8.5,26.26,8.5,22.5C8.5,13.83,15.83,6.5,24,6.5S39.5,13.83,39.5,22.5S32.17,38,24,38z M31.86,29.86c-0.41,1.15-2.12,2.12-2.98,2.18c-0.77,0.05-1.7,0.08-2.72-0.64c-1.27-0.83-5.52-4.58-6.44-5.73c-0.89-1.11-2.15-2.92-2.15-4.42s1.35-3.07,1.83-3.5c0.5-0.42,1.08-0.53,1.45-0.53c0.36,0,0.72,0,1.03,0.02c0.33,0.01,0.78-0.13,1.22,0.94c0.43,1.08,1.46,3.74,1.58,4.02c0.13,0.27,0.22,0.6,0.05,0.97c-0.17,0.37-0.27,0.6-0.53,0.92c-0.26,0.32-0.55,0.7-0.78,0.94c-0.27,0.28-0.54,0.58-0.23,1.08c0.3,0.5,1.35,2.21,2.9,3.58c1.99,1.78,3.07,2.33,3.57,2.59c0.5,0.25,0.8,0.22,1.09-0.13c0.29-0.35,1.26-1.48,1.6-1.98c0.33-0.5,0.67-0.42,1.12-0.25c0.47,0.18,2.98,1.41,3.48,1.68c0.5,0.27,0.83,0.42,0.95,0.65C32.27,28.71,32.27,28.71,31.86,29.86z"></path>
                </svg>
              </a>
            </li>

            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <a
                href="https://www.instagram.com/isdaindia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="form-section">
        <form className="footerform" onSubmit={handleSubmit}>
          <h2>Message Us</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Your Phone no"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Comments</label>
            <textarea
              className="form-control"
              placeholder="Enter Your Comments"
              maxLength={200}
              rows="3"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Footerdetails;
