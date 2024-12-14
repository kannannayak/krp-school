import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Ourvalidcustomers/Ourvalidcustomer.css";
import cust1 from "../Images/cus1.jpg";
import cust2 from "../Images/cus2.jpg";
import cust3 from "../Images/cus3.jpg";
import cust4 from "../Images/cus4.jpg";
import cust5 from "../Images/cus5.jpg";
import cust6 from "../Images/cus6.jpg";
import cust7 from "../Images/cus7.jpg";
import cust8 from "../Images/cus8.jpg";
import cust9 from "../Images/cus9.jpg";
import cust10 from "../Images/cus10.jpg";

export const Ourvalidcustomers = () => {
  // Image array for the slider
  const customerImages = [cust1, cust2, cust3, cust4, cust5, cust6, cust7, cust8, cust9, cust10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='Ourvalidcustomer container'>
      <div className="about-us-title brushstroke-container fade-in">
        <span className="brushstroke-text">Our Valued Customers</span>
      </div>
      <Slider {...settings}>
        {customerImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`customer-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ourvalidcustomers;
