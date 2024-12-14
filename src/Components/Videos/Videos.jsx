import React, { useEffect, useState } from 'react';
import '../Videos/Videos.css';

function Tutorial() {
  const url = "https://themithraa.com/RestApi/WebApi/tutorial.php";
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedTutorialIds, setExpandedTutorialIds] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
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
          throw new Error('Failed to fetch tutorials');
        }

        const data = await response.json();

        if (data && Array.isArray(data.Data)) {
          const updatedTutorials = data.Data.map(tutorialItem => {
            const urlMatch = tutorialItem.tut_url.match(/src="([^"]+)"/);
            const extractedUrl = urlMatch ? urlMatch[1] : null;

            return {
              ...tutorialItem,
              tut_url: extractedUrl
            };
          });
          setTutorials(updatedTutorials);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  const toggleDetails = (id) => {
    setExpandedTutorialIds((prevIds) => 
      prevIds.includes(id) ? prevIds.filter((tutorialId) => tutorialId !== id) : [...prevIds, id]
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
    return <div>No tutorials available</div>;
  }

  return (
    <div className='tutorialdetails p-5'>
       <div className="brushstroke-container">
        <span className="brushstroke-text">Testimonial Videos</span>
      </div>

      <div className="card-container2">
        {tutorials.map((tutorialItem) => (
          <div className="card2" key={tutorialItem.tut_id}>
            <h5>{tutorialItem.tut_name}</h5>
            {tutorialItem.tut_url && (
              <iframe
                width="560"
                height="350"
                src={tutorialItem.tut_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {renderDescription(tutorialItem.tut_details, tutorialItem.tut_id)}
            <p>{tutorialItem.tut_created}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
