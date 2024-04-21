import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList.jsx';
import styles from '../MoviesPage/MoviesPage.module.css';

const apiKey = 'e6a549f1ef2b4d5e610b11e0d550dd0d';
const apiUrl = 'https://api.themoviedb.org/3';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query');

    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [location.search]);

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(`${apiUrl}/search/movie`, {
        params: {
          api_key: apiKey,
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    window.location.search = searchParams.toString();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;