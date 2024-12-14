import "./Whystacking.css";
import { useEffect,useState } from "react";

const Whystacking = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://themithraa.com/RestApi/WebApi/sports_tacking_img.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            api_key: "Mithra@2024"
          })
        });

        if (response.ok) {
          const data = await response.json();
          setImages(data.Tournament.map(tournament => tournament.img_name));
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const reveals = document.querySelectorAll('.glass-card');

  //     reveals.forEach((reveal, index) => {
  //       const windowHeight = window.innerHeight;
  //       const elementTop = reveal.getBoundingClientRect().top;
  //       const elementVisible = 100;

  //       if (elementTop < windowHeight - elementVisible) {
  //         reveal.classList.add('active');
  //       } else {
  //         reveal.classList.remove('active');
  //       }

  //       // Apply fade-left to odd cards and fade-right to even cards
  //       if (index % 2 === 0) {
  //         reveal.classList.add('fade-left');
  //       } else {
  //         reveal.classList.add('fade-right');
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='rulesdata'>
      <div className='container'>
        <div className="brushstroke-container fade-in">
          <span className="brushstroke-text">Why Sports Stacking?</span>
        </div>
        
        <div className="content-container">
          <div className="stackingcontent">
            <ul className="rulecontent">
              <li className="glass-card">
                <div className="circle large"><span>Hand-Eye Coordination :</span> Participants practice to improve their speed and agility, often aiming to set personal records or compete in tournaments.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Bilateral Proficiency :</span> The activity encourages the use of both hands, helping develop ambidexterity. It requires equal use of the right and left hands, which can be beneficial for overall motor skills.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Speed and Agility :</span> Participants practice to improve their speed and agility, often aiming to set personal records or compete in tournaments.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Mental Focus :</span> It requires intense concentration and mental focus, which can help improve cognitive function, particularly in areas related to memory, processing speed, and pattern recognition.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Physical Fitness :</span> Though it may not seem like a traditional sport, sports stacking involves physical activity that can contribute to overall fitness, especially for younger participants.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Fun and Social Interaction :</span> Sports stacking is often done in groups or teams, making it a fun and social activity. Competitions and tournaments can foster a sense of community and teamwork.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>Inclusivity :</span> It’s an activity that can be enjoyed by people of all ages and skill levels, making it accessible and inclusive.</div>
              </li>

              <li className="glass-card">
                <div className="circle large"><span>School and Educational Benefits :</span> Many schools use sports stacking as a tool for teaching and reinforcing skills like concentration, coordination, and teamwork. It's often integrated into physical education programs.</div>
              </li>
            </ul>
          </div>
          {images.map((image, index) => (
          <div className="stackingimg" key={index}>
            <img className="stackingimge" src={image} alt={`Image ${index}`} />
          </div>
             ))}
        </div>
       
      </div>
    </div>
  );
};

export default Whystacking;
