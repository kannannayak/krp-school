import React, { useEffect, useState } from 'react';
import '../Videos/Videos.css';

function News() {
  const url = "https://themithraa.com/RestApi/WebApi/news.php";
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNewsIds, setExpandedNewsIds] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
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
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();

        if (data && Array.isArray(data.Data)) {
          const updatedNews = data.Data.map(newsItem => {
            const urlMatch = newsItem.news_url.match(/src="([^"]+)"/);
            const extractedUrl = urlMatch ? urlMatch[1] : null;

            return {
              ...newsItem,
              news_url: extractedUrl
            };
          });
          setNews(updatedNews);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const toggleDetails = (id) => {
    setExpandedNewsIds((prevIds) => 
      prevIds.includes(id) ? prevIds.filter((newsId) => newsId !== id) : [...prevIds, id]
    );
  };

  const renderDescription = (description, id) => {
    const isExpanded = expandedNewsIds.includes(id);
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

  if (news.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div className='p-5'>
      <div className="brushstroke-container">
        <span className="brushstroke-text">NEWS</span>
      </div>

      <div className="card-container2">
        {news.map((newsItem) => (
          <div className="card2" key={newsItem.news_id}>
            <h5>{newsItem.news_name}</h5>
            {newsItem.news_url && (
              <iframe
                width="560"
                height="350"
                src={newsItem.news_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {renderDescription(newsItem.news_details, newsItem.news_id)}
            <p>{newsItem.news_created}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
