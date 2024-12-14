import React, { useEffect, useState } from 'react';
import './Tutorial.css';

function Tutorial() {
  const url = "https://themithraa.com/RestApi/WebApi/tutorial_web.php";
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedTutorialIds, setExpandedTutorialIds] = useState([]);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            "api_key": "Mithra@2024"
          })
        });

        if (!response.ok) {
          throw new Error('No tutorials available at the moment.');
        }

        const data = await response.json();

        if (data && Array.isArray(data.Data)) {
          if (data.Data.length === 0) {
            throw new Error('No tutorials available at the moment.');
          }
          setTutorials(data.Data);
        } else {
          throw new Error('Received invalid data from server.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorial();
  }, []);

  const toggleDetails = (id) => {
    setExpandedTutorialIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter(tutId => tutId !== id) : [...prevIds, id]
    );
  };

  const renderDescription = (description, id) => {
    const isExpanded = expandedTutorialIds.includes(id);
    const truncatedDescription = description.slice(0, 180);

    return (
      <p>
        {isExpanded || description.length <= 180 ? description : truncatedDescription + '...'}
        {description.length > 180 && (
          <button className="read-more-btn m-1" onClick={() => toggleDetails(id)}>
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </p>
    );
  };

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (tutorials.length === 0) {
    return <div>No tutorials available at the moment.</div>;
  }

  return (
    <div className='tutorialdetails p-5'>
      <div className="brushstroke-container">
        <span className="brushstroke-text">Tutorial Videos</span>
      </div>

      <div className="card-container2">
        {tutorials.map((tutorialItem) => (
          <div className="card2" key={tutorialItem.tutorial_web_id}>
            <h5>{tutorialItem.tutorial_web_name}</h5>
            <iframe
              width="560"
              height="350"
              src={tutorialItem.video_web}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {renderDescription(tutorialItem.tutorial_web_details, tutorialItem.tutorial_web_id)}
            <p>{tutorialItem.tutorial_web_created}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
