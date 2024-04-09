import React from 'react';
import { Link } from 'react-router-dom';

import '../css/landing.css'; 

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Cool Library</h1>
      </header>
      <div className="content">
        <div className="centered">
          <img
            src="https://source.unsplash.com/random/200x200" // You can replace this URL with any other image URL
            alt="Library"
            className="library-image"
          />
          <button className="get-started-button">Get Started</button>
          <Link to="/home" className="get-started-button">Go to Other Page</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
