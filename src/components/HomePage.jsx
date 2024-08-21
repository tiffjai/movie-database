import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="card">
    <h1>Welcome to the Movie Database</h1>
    <p>Explore our collection of movies and vote for your favorites!</p>
    <Link to="/movies" className="button">Browse Movies</Link>
  </div>
);

export default HomePage;
