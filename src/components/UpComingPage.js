import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './pages/MovieList';

const UpComingPage = () => {
  const [movies, setMovies] = useState([]);

  function fetchMovies(){
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1').then(result=>{
      setMovies(result.data.results);
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    fetchMovies();
  },[])

  return (
    <div className='bg-dark text-white p-3 w-100'>
      <h1>Upcoming Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default UpComingPage
;
