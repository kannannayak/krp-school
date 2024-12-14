import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Tournament/Tournament.css';
// import tournament from '../Images/tournament.png'

export const Tournament = () => {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://themithraa.com/RestApi/WebApi/tournament.php', {
          "api_key": "Mithra@2024"
        });

        // Sort tournaments by date in ascending order
        const sortedTournaments = response.data.Tournament.sort((a, b) => new Date(a.tourn_date) - new Date(b.tourn_date));

        setTournaments(sortedTournaments);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

   // Function to sanitize HTML content from CKEditor
   const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className='tournamentpage mx-5'>
      <div className="brushstroke-container">
          <span className="brushstroke-text">Upcoming Tournaments</span>
        </div>
      <div className='tournament-grid mt-5'>
        {tournaments.slice(0, 10).map((data, index) => (
          <div key={index} className='tournamentcard'>
              <div style={{ fontSize: '18px', fontWeight: 'bolder' }}>Tournament - <span>{data.tourn_name}</span></div>
              <div>Game Type - <span>{data.game_type_name}</span></div>
              <div>Tournament Type - <span>{data.tourn_type}</span></div>
              <div>Tournament Place - <span>{data.tourn_details}</span></div>
              <div>Tournament Date - <span>{data.tourn_date}</span></div>
              <div className='dr'>
              <details>
                <summary className='summary'>Details</summary>
                <div className='tourdescription text-black' dangerouslySetInnerHTML={createMarkup(data.tourn_desc)}></div>
              </details>
              <div>
                <a href="Register">
                  <button className='btn buttn'>Register</button>
                </a>
              </div>
              </div>
            </div>
        ))}
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Tournament;
