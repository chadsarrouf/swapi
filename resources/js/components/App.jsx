import React from 'react';
import ReactDOM from 'react-dom/client';
import PeopleList from './PeopleList';
import PlanetsList from './PlanetList';
import StarshipsList from './StarshipList';
import SearchPerson from './SearchPerson';

function App() {
  return (
      <div className="container">
        <PeopleList />
        <SearchPerson />    
        <PlanetsList />
        <StarshipsList />
      </div>
  );
}

export default App;

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById("root"));

  Index.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
  )
}
