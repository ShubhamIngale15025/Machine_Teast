import React, { useState } from 'react';
import MovieCard from './MovieCard';
import '../Assets/MovieList.css';

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10; 

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movie-list-container">
      <div className="movie-list bg-dark">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
