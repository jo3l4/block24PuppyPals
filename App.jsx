import React, { useState,useEffect } from 'react';
import './App.css';
import { puppyList } from './data.js';
import './index.css'

function App() {
  const [puppies, setPuppies] = useState([]);
  const [featPupId, setFeatPupId] = useState(null);

  useEffect(() => {
    setPuppies(puppyList);
  }, []);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  const addPuppy = () => {
    const newPuppy = {
      name: 'New Puppy',
      breed: 'Unknown',
      age: 1,
      id: Date.now(),
    };

    setPuppies([...puppies, newPuppy]);
  };

  const handleClick = (id) => {
    setFeatPupId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Puppy List</h1>
      </header>
      <button onClick={addPuppy}>Add Puppy</button>
      {
        puppies.map((puppy) => {
          return (
            <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })
      }
      { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;