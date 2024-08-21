import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFavoriteMovies } from '../redux/actions/movieActions';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h1>Favorite Movies</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.movie.ids.trakt} className="card">
            <h3>{movie.movie.title}</h3>
            <p>Year: {movie.movie.year}</p>
            <Link to={`/movies/${movie.movie.ids.trakt}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
