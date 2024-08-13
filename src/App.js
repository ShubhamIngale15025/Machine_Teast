import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import TopRatedPage from './components/TopRatedPage';
import UpComingPage from './components/UpComingPage';
import MovieDetails_Page from './components/MovieDetails_Page';
import Serch_Page from './components/Serch_Page';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Populer from './components/Populer';

function App() {
  return (
    
    <div>
        <BrowserRouter>
           <Navbar/>
          <Routes>
              <Route path="/" element={<Populer/>} />
              <Route path="/populer"  element={<Populer/>} />
              <Route path="/top-rated"  element={<TopRatedPage/>} />
              <Route path="/upcoming"  element={<UpComingPage/>} />
              <Route path="/movie/:movieId" element={<MovieDetails_Page />} />
              <Route path="/search/:query" element={<Serch_Page />} />
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;