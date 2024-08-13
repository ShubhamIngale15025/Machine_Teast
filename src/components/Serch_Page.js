import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from './pages/MovieList';

const Serch_Page = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  function fetchMovies() {
    if (query.trim() === '') {
      setError('Please enter a valid movie name.');
      setMovies([]);
      return;
    }

    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`)
      .then((result) => {
        if (result.data.results.length === 0) {
          setError('No movies found for your search.');
        } else {
          setMovies(result.data.results);
          setError('');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred while fetching movies.');
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <div>
      <h1 className='bg-dark p-3 text-light'>Search Results for "{query}"</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Serch_Page;
