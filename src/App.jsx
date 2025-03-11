import { useState, useEffect } from 'react';
import Search from './components/Search'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import MovieCard from './components/MovieCard';
import './App.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  // Fetch trending movies (limit to 5)
  useEffect(() => {
    fetch(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`, API_OPTIONS)
      .then(response => response.json())
      .then(data => setTrendingMovies(data.results ? data.results.slice(0, 5) : []))
      .catch(error => console.error("Error fetching trending movies:", error));
  }, []);

  // Fetch movies based on search term
  useEffect(() => {
    if (searchTerm) {
      fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`, API_OPTIONS)
        .then(response => response.json())
        .then(data => setMovies(data.results || []))
        .catch(error => console.error("Error fetching search results:", error));
    } else {
      // If no search term, show popular movies
      fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`, API_OPTIONS)
        .then(response => response.json())
        .then(data => setMovies(data.results || []))
        .catch(error => console.error("Error fetching popular movies:", error));
    }
  }, [searchTerm]);

  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="/logo.png" className="logo" alt="Logo" />
            <img src="./hero.png" alt="Hero Banner" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          {/* Trending Movies Section (max 5) */}
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.length > 0 ? (
                trendingMovies.map((movie, index) => (
                  <li key={movie.id}>
                    <p>{index + 1}</p>
                    <img
                      src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : '/no-movie.png'}
                      alt={movie.title}
                    />
                  </li>
                ))
              ) : (
                <p>Loading movies...</p>
              )}
            </ul>
          </section>

          {/* Search Results / Our Movies Section */}
          <section className="all-movies">
            <h2>{searchTerm ? `Search Results for "${searchTerm}"` : "Our Movies"}</h2>
            <ul>
              {movies.length > 0 ? (
                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
              ) : (
                
                <Spinner />

                )}
            </ul>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
