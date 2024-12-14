import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import AboutUs from "../Abouts/AboutUs";
import Footerdetails from "../Footerdetail/Footerdetails";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutKRP from "../AboutKRP/AboutKRP";
import Whystacking from "../Whystacking/Whystacking";
import Ourcourse from "../Ourcourse/Ourcourse";
import Ourvalidcustomers from "../Ourvalidcustomers/Ourvalidcustomers";
import Achivers from "../Achivers/Achivers";
import Copyrights from "../Copyrights/Copyrights";
import { Carousel } from "antd";
import CeoMessage from "../CEOMessage/CEOMessage";
import Faculties from "../Faculties/Faculties";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    const fetchSliders = async () => {
      try {
        const response = await fetch(
          "https://themithraa.com//RestApi/WebApi/slider.php"
        );
        const data = await response.json();

        if (data.status) {
          setSliders(data.Sliders);
        }
      } catch (error) {
        console.error("Error fetching the slider data:", error);
      }
    };

    fetchSliders();
  }, []);

  useEffect(() => {
    // Automatic slide change every 2 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [sliders]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="content">
      <div className="homecontent">
        <div
          className="checking"
          style={{
            position: "relative",
            width: "100vw", // Full width of the viewport
            height: "100vh", // Full height of the viewport
            overflow: "hidden",
            borderRadius: "8px",

            // background: "red", // Optional background color
          }}
        >
          <Carousel
            // style={{ height: "100vh", width: "100vw" }}
            arrows
            autoplay
          >
            {sliders.map((slider, index) => (
              <div
                key={slider.img_id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh", // Occupy the full height of the container
                  maxWidth: "100vw", // Occupy the full width of the container
                  // backgroundColor: index === currentSlide ? "#f5f5f5" : "#fff",
                  transition: "background-color 0.5s ease",
                  // background: "yellow",
                }}
              >
                <img
                  src={slider.web_img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    borderRadius: "10px",
                    maxWidth: "90%",
                    width: "100vw",
                    height: "90vh",
                    objectFit: "cover", // Ensures image covers the container without distortion
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <br />
      <AboutKRP />
      {/* <CeoMessage /> */}
      {/* <br /> */}
      {/* <Whystacking /> */}
      {/* <br /> */}
      <Achivers /> <br />
      <Ourcourse />
      {/* <Ourvalidcustomers /> <br /> */}
      <Faculties /> <br />
      <AboutUs />
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6AA845"
          fillOpacity="1"
          d="M0,256L34.3,240C68.6,224,137,192,206,186.7C274.3,181,343,203,411,192C480,181,549,139,617,138.7C685.7,139,754,181,823,202.7C891.4,224,960,224,1029,229.3C1097.1,235,1166,245,1234,229.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <Footerdetails />
      <Copyrights />
    </div>
  );
};

export default Home;
