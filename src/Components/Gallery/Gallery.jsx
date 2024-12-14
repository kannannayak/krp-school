import React, { useState, useEffect } from "react";
import "../Gallery/Gallery.css";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://themithraa.com/RestApi/WebApi/image.php", {
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
          setImages(data.Tournament.map(tournament => tournament.images_name));
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="galback">
        <div className="brushstroke-container">
        <span className="brushstroke-text">Memorable Moments</span>
      </div>
      <div className="d-flex flex-wrap">
      {images.map((image, index) => (
        <div className="gall" key={index}>
          <img className="gallimg" src={image} alt={`Image ${index}`}/>
        </div>
      ))}
    </div>
    </div>
 
  );
};

export default Gallery;
