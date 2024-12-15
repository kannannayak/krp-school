import React, { useState, useEffect } from "react";
import "../NavBar/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/KRP-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);
    setIsOpen(false); // Close the dropdown when location changes
  }, [location]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a dropdown item is active
  const isDropdownActive = (dropdownUrl) => {
    return url === dropdownUrl ? "active" : "";
  };

  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand branding" href="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            width="100px"
            height="80px"
          />
        </a>
        <button
          className="navbar-toggler navbar-dark bg-secondary"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="nav justify-content-end unorder ulcolor">
            <li className="nav-item">
              <a className="nav-link ancher" href="/Home">
                Home
              </a>
            </li>
            <li
              className={`nav-item dropdown unlist ${isDropdownActive(
                "/Rules"
              )}`}
            >
              <a
                className="nav-link dropdown-toggle ancher"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Announcements
              </a>
              <ul
                className="dropdown-menu ulcolor"
                aria-labelledby="navbarDropdown1"
              >
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Tutorials"
                    )}`}
                    to="/Tutorials"
                  >
                    Sports Awards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Tutorials"
                    )}`}
                    to="/Tutorials"
                  >
                    Student Awards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/News"
                    )}`}
                    to="/News"
                  >
                    News And media
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown unlist ${isDropdownActive(
                "/Tournament"
              )}`}
            >
              <li className="nav-item">
                <a className="nav-link ancher" href="/Records">
                  Academic Records
                </a>
              </li>

              <ul
                className="dropdown-menu ulcolor"
                aria-labelledby="navbarDropdown2"
              >
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Tournament"
                    )}`}
                    to="/Tournament"
                  >
                    Tournaments
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Records"
                    )}`}
                    to="/Records"
                  >
                    Records
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown unlist ${isDropdownActive(
                "/Videos"
              )}`}
            >
              <a
                className="nav-link dropdown-toggle ancher"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gallery
              </a>
              <ul
                className="dropdown-menu ulcolor"
                aria-labelledby="navbarDropdown3"
              >
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Videos"
                    )}`}
                    to="/Videos"
                  >
                    Festival Videos
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Gallery"
                    )}`}
                    to="/Gallery"
                  >
                    Festival Images
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ancher unlist ${isDropdownActive(
                      "/Gallery"
                    )}`}
                    to="/Gallery"
                  >
                    Student Group Photos
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li className={`nav-item dropdown unlist ${isDropdownActive("/")}`}>
              <a
                className="nav-link dropdown-toggle ancher"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul
                className="dropdown-menu ulcolor"
                aria-labelledby="navbarDropdown3"
              >
                <li>
                  <a
                    className="dropdown-item ancher unlist"
                    href="https://themithraa.com/Trainers/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trainer Login
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item ancher unlist"
                    href="https://themithraa.com/Superadmin/admin/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    School Login
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item ancher unlist"
                    href="/app-release.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a className="nav-link ancher" href="/carriers">
                Carreers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ancher" href="/Contactus">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
