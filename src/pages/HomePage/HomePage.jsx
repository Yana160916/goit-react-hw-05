import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../api.js";
import styles from '../HomePage/HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Not Found Page:", error));
  }, []);

  return (
    <div className={styles.boxHome}>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles.Link}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;