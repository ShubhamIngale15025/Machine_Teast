import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Assets/MovieDetails_Page.css'
import CastCard from './pages/CastCard';

const MovieDetails_Page = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieDetail();
    fetchMovieCast();
  }, [movieId]);

  const backdropUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : 'https://via.placeholder.com/1280x720?text=No+Image+Available';

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster+Available';

  return (
    <div className="movie-detail">
      <div className="movie-detail-content" style={{ backgroundImage: `url(${backdropUrl})` }}>
        <img
          className="movie-detail-image"
          src={posterUrl}
          alt={movie.title}
        />
        <div className="movie-detail-text">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
      <div className="cast">
        <h2>Cast</h2>
        <div className="cast-list">
          {cast.map((castMember) => (
            <CastCard key={castMember.cast_id} castMember={castMember} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails_Page;
