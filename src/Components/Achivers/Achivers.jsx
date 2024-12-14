import React, { useEffect, useState } from 'react';
import Slider from "react-slick"; // Import react-slick Slider component
import '../Achivers/Achivers.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Achivers = () => {
  const [achieversData, setAchieversData] = useState([]);

  useEffect(() => {
    fetch('https://themithraa.com//RestApi/WebApi/achievers.php')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setAchieversData(data.Achievers);
        } else {
          console.error('Failed to fetch achievers');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1,
    autoplay: true,   // Enable auto-scroll
    autoplaySpeed: 1500, // Auto-scroll every 1.5 seconds (1500ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='achivers-container container'>
      <div className="about-us-title brushstroke-container fade-in">
        <span className="brushstroke-text">Achievers</span>
      </div>
      <Slider {...sliderSettings}>
        {achieversData.map((achiever, index) => (
          <div key={index}>
            <div className="achiever-card ">
              <div className="avatar-placeholder">
                {achiever.image ? (
                  <img src={achiever.image} alt={achiever.name} className="avatar-image card-img-top" />
                ) : (
                  <div className="avatar-fallback">No Image</div>
                )}
              </div>
              <div className="card-body">
                <h3 className="card-title">{achiever.name} <span className="year">'{achiever.age}</span></h3>
                <p className="house card-text">{achiever.location}</p>
                <p className="time card-text">{achiever.timing} <span className="pattern">({achiever.game})</span></p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Achivers;
