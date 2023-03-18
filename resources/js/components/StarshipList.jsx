import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadSpinner from './LoadSpinner';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        setStarships(response.data.results);
        setIsLoading(false);        
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);        
      });
  }, []);
  
  return (
    <div>
      <h2>Starships</h2>
      {isLoading ? <LoadSpinner /> :
        <ul>
          {starships.map(starship => (
            <li key={starship.url}>{starship.name}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default StarshipList;