import { useState } from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList.jsx';
import styles from '../MoviesPage/MoviesPage.module.css';

const apiKey = 'e6a549f1ef2b4d5e610b11e0d550dd0d';
const apiUrl = 'https://api.themoviedb.org/3';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}/search/movie`, {
        params: {
          api_key: apiKey,
          query: query,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Not Found Page:', error);
    }
  };

  return (
    <div className={styles.containerSearch}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" value={query} onChange={handleChange} className={styles.input} />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;