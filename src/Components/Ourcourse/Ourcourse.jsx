import React, { useEffect } from "react";
import "./Ourcourse.css";

export const Ourcourse = () => {
  // Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".fade-in");

      reveals.forEach((reveal, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          setTimeout(() => {
            reveal.classList.add("active");
          }, index * 300); // Delay by 300ms between each paragraph
        } else {
          reveal.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="ourcoursedetail"
      // style={{ background: "none", height: "1px", margin: 0, padding: 0 }}
    >
      <div className="container">
        <div className="brushstroke-container fade-in">
          <span className="brushstroke-text">Our Course Level</span>
        </div>

        <div className="coursecontent">
          <div className="courselevel fade-in">
            <h2>Beginner Level</h2>
            <ul>
              <li>
                <strong>Introduction to Basic Sequences:</strong> Learners start
                with the simplest stacking sequences, like the 3-3-3 & 3-6-3 and
                Cycle stack.
              </li>
              <li>
                <strong>Basic Techniques:</strong> Focus on understanding the
                correct hand positions and the fundamental techniques of
                stacking and unstacking.
              </li>
            </ul>
          </div>

          <div className="courselevel fade-in">
            <h2>Intermediate Level</h2>
            <ul>
              <li>
                <strong>More Complex Sequences:</strong> Introduction to more
                complex sequences, such as the 3-6-3 & Team Relay and Doubles
                stack.
              </li>
              <li>
                <strong>Speed Development:</strong> Emphasis on increasing speed
                while maintaining accuracy in stacking and unstacking.
              </li>
              <li>
                <strong>Introduction to the Cycle:</strong> Learning the full
                cycle (3-6-3, 6-6, and 1-10-1).
              </li>
            </ul>
          </div>

          <div className="courselevel fade-in">
            <h2>Advanced Level</h2>
            <ul>
              <li>
                <strong>Mastering the Cycle:</strong> Focus on perfecting the
                cycle stack sequence, which is the most challenging in sports
                stacking.
              </li>
              <li>
                <strong>Consistency and Precision:</strong> Training to maintain
                consistency and precision at higher speeds.
              </li>
              <li>
                <strong>Time Trials:</strong> Regular timed practice sessions to
                improve and measure speed.
              </li>
            </ul>
          </div>

          <div className="courselevel fade-in">
            <h2>Competitive Level</h2>
            <ul>
              <li>
                <strong>Tournament Preparation:</strong> Training intensifies
                with a focus on preparing for competitions.
              </li>
              <li>
                <strong>Advanced Techniques:</strong> Learning techniques to
                shave off milliseconds, such as optimizing hand movements and
                improving transitions between stacks.
              </li>
              <li>
                <strong>Mental Focus:</strong> Emphasizing mental focus and
                dealing with competition pressure.
              </li>
            </ul>
          </div>

          <div className="courselevel fade-in">
            <h2>Expert Level</h2>
            <ul>
              <li>
                <strong>World-Class Speed:</strong> Training to achieve
                world-class speeds and break personal or world records.
              </li>
              <li>
                <strong>Advanced Strategies:</strong> Developing personal
                strategies to further optimize speed and reduce errors.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> Even at this level,
                stackers continually work on refining their skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourcourse;
