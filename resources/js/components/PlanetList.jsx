import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadSpinner from './LoadSpinner';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => {
        setPlanets(response.data.results);
        setIsLoading(false);        
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);        
      });
  }, []);
  
  return (
    <div>
      <h2>Planets</h2>
      {isLoading ? <LoadSpinner /> :
        <ul>
          {planets.map(planet=> (
            <li key={planet.url}>{planet.name}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default PlanetList;