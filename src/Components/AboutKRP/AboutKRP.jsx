import React, { useEffect } from "react";
import "./AboutKRP.css";
import cupstack from "../Images/cupstack.jpg";
import { Card } from "antd";

import avarat from "../Images/avatar.png";
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
          <span className="brushstroke-text">About KRP School</span>
        </div>
        <div
          className="coursecontent1"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5rem",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div className="coursecnt">
            <p
              className="fade-in mt-2"
              style={{
                width: "50%",
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#333",
                textAlign: "justify",
                margin: "10px 0",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderLeft: "4px solid #4CAF50",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                animation: "fadeIn 1.5s ease-in-out",
                lineHeight: "1.6",
              }}
            >
              KRP Matriculation Higher Secondary School is located in Alathur,
              Salem, Tamil Nadu, at Bhavani Main Road, Pachampalayam,
              Komarapalayam Taluk, Padaiveedu, Tamil Nadu 637303. It is
              well-regarded in the area, ranked first among 29 schools in
              Alathur and achieving an overall rating of 3.9 out of 5 based on
              38 reviews. The school provides education up to higher secondary
              level and has a reputation for being among the popular choices in
              the region.
            </p>
          </div>

          <Card
            hoverable
            cover={<img alt="example" src={avarat} width={150} height={250} />}
          >
            <Meta title="Principal" description="Mr. K. Kalayanasundaram" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutKRP;
