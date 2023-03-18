import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadSpinner from './LoadSpinner';

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPeople(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  
  return (
    <div>
      <h2>People</h2>
      {isLoading ? <LoadSpinner /> :
        <ul>
          {people.map(person => (
            <li key={person.url}>{person.name}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default PeopleList;