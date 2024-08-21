import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../redux/actions/movieActions';

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!selectedMovie) return null;

  return (
    <div className="card">
      <Link to="/movies" className="button">&larr; Back</Link>
      <h1>{selectedMovie.title}</h1>
      <p>Year: {selectedMovie.year}</p>
      <p>{selectedMovie.overview}</p>
    </div>
  );
};

export default MovieDetailPage;
