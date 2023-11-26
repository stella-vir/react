import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [racingData, setRacingData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/racing')
      .then(response => {
        setRacingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Racing Data</h1>
      {racingData ? (
        <div>
          <p>Message: {racingData.message}</p>
          <p>Key: {racingData.product}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
