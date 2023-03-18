import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadSpinner from './LoadSpinner';


const SearchPerson = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);            

    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
      setSearchResults(response.data.results);
      setSearchExecuted(true);
      setIsLoading(false);        
      
    } catch (error) {
      console.error(error);
      setIsLoading(false);        
      
    }
  };

  return (
    <div className="search">
      <h2>Search for a person</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <div className='results'>
      {isLoading ? <LoadSpinner /> : 
        <>
          {searchResults.length > 0 && (  
            <div>        
              <h3>Results</h3>
              <ul>
                {searchResults.map((person) => (
                  <li key={person.url}>{person.name}</li>
                ))}
              </ul>
            </div>
          )}
          {(searchExecuted  && searchResults.length == 0) && (
            <div>
              <h3>No Results</h3>
            </div>
          )}
        </>
      }
      </div>
    </div>
  );
};

export default SearchPerson;