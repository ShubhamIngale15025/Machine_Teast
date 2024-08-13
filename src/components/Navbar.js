import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className='w-100'>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary p-2 text-dark fw-bold ">
  <div className="container-fluid text-right">
    <NavLink className="navbar-brand fs-5" to="">Movie_Page</NavLink>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto fs-6">
        <NavLink className="nav-link active " aria-current="" to="/populer">Popular</NavLink>
        <NavLink className="nav-link" to="/top-rated">TopRated</NavLink>
        <NavLink className="nav-link" to="/upcoming">Upcoming</NavLink>
        <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <button type="submit" className="btn btn-outline-dark p-2 float-end col-5">Search</button>
      </form>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar