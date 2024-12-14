import React, { useState, useEffect } from "react";
import "../Gallery/Gallery.css";
import { Button, Modal } from "antd";

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://themithraa.com/RestApi/WebApi/image.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              api_key: "Mithra@2024",
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setImages(
            data.Tournament.map((tournament) => tournament.images_name)
          );
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  return (
    <div className="galback">
      <div className="brushstroke-container">
        <span className="brushstroke-text">Memorable Moments</span>
      </div>
      <div className="d-flex flex-wrap">
        {images.map((image, index) => (
          <div className="gall" key={index}>
            <img
              className="gallimg"
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      <Modal
        open={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{ width: "100%", height: "100%" }}
          />
          <Button type="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
