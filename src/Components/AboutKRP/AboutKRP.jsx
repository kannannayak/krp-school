import React, { useEffect } from "react";
import "./AboutKRP.css";
import cupstack from "../Images/cupstack.jpg";
import { Card } from "antd";

import avarat from "../Images/avatar.png";
import correspondentImage from "../Images/correspondent.png";
export const AboutKRP = () => {
  // Scroll Animation
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const reveals = document.querySelectorAll('.fade-in');

  //     reveals.forEach((reveal, index) => {
  //       const windowHeight = window.innerHeight;
  //       const elementTop = reveal.getBoundingClientRect().top;
  //       const elementVisible = 100;

  //       if (elementTop < windowHeight - elementVisible) {
  //         setTimeout(() => {
  //           reveal.classList.add('active');
  //         }, index * 300); // Delay by 300ms between each paragraph
  //       } else {
  //         reveal.classList.remove('active');
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const { Meta } = Card;
  return (
    <div className="ourcoursedetail1">
      <div className="container">
        <div className="brushstroke-container fade-in">
          <span className="brushstroke-text">Dear KRP family members,</span>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p>  KRP Matriculation Higher Secondary School, located in Alathur,
              Salem, Tamil Nadu, is highly regarded, ranked first among 29
              schools in the area, with a 3.9/5 rating based on 38 reviews. It
              offers education up to the higher secondary level.</p>
          </div>
          <div className="col-lg-4">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={correspondentImage}
                width={150}
                height={250}
              />
            }
          >
            <Meta title="Correspondent" description="Mr. K. Kalayanasundaram" />
          </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutKRP;
