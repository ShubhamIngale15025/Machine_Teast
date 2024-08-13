import React from 'react';
import '../Assets/MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const nav = useNavigate()
  function movieDetails(){
    nav(`/movie/${movie.id}`)
  }
  return (
    <div className="movie-card" onClick={movieDetails}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-rating">Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;