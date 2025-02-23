import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting after logout

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/curated', {
          headers: {
            'Authorization': 'ikVa2t7yjooynnQtmdjtXixtCrsi9jbKgUu60txfuHyyW0IHFRTBvLni'
          }
        });
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <nav>
        <Link to="/logout" onClick={handleLogout}>Logout</Link>
      </nav>
      <h2>Curated Photos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ margin: '10px' }}>
            <img src={photo.src.medium} alt={photo.photographer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
