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
          Join Our Team | Careers at KRP Matriculation Higher Secondary School
        </span>
      </div>
      <div className="franchise-content">
        <div className="franchise-text">
          <h3 className="fw-bold">Welcome to KRP Matriculation Higher Secondary School Careers </h3>
          <p className="fw-normal">
            At KRP Matriculation Higher Secondary School, we believe in nurturing not just students but also the passionate educators and professionals who guide them. Join our dynamic team and contribute to shaping the future of tomorrow's leaders.
          </p>

        </div>
        <div className="franchise-video">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r7uBj4yaL_8?si=aCMl5rygl-aSEScE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe> */}
          <h4 className="fw-bold">Why Work With Us?</h4>
          <ul>
            <li><b>Inspiring Environment:</b> Be part of a vibrant school community that values innovation, creativity, and excellence in education.</li>
            <li><b>Professional Growth:</b> We provide continuous training and development opportunities for our staff.</li>
            <li><b>Collaborative Team:</b> Work with a supportive and motivated team of educators and professionals.</li>
            <li><b>Modern Infrastructure:</b> Enjoy state-of-the-art facilities designed to create the best learning and teaching environment.</li>

          </ul>
        </div>
        
      </div>
<br />
      <h1 className="fw-bold text-center">Our Jobs</h1>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <i className="bx bxl-mailchimp"></i>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Mailchimp</h6>
                    <span>1 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Design</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  Senior Product
                  <br />
                  Designer-Singapore
                </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mt-3">
                    <span className="text1">
                      32 Applied <span className="text2">of 50 capacity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Dribbble</h6>
                    <span>4 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Product</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  Junior Product
                  <br />
                  Designer-Singapore
                </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mt-3">
                    <span className="text1">
                      42 Applied <span className="text2">of 70 capacity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <i className="bx bxl-reddit"></i>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Reddit</h6>
                    <span>2 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Design</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  Software Architect
                  <br />
                  Java - USA
                </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mt-3">
                    <span className="text1">
                      52 Applied <span className="text2">of 100 capacity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
};

export default BecomeFranches;
