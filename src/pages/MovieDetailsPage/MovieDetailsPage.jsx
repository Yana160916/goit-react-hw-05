import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom"; 
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css'

const apiKey = "e6a549f1ef2b4d5e610b11e0d550dd0d"; 
const apiUrl = "https://api.themoviedb.org/3";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}`, {
          params: {
            api_key: apiKey,
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Not Found Page:", error);
      }
    };

    fetchMovieDetails();

    
  }, [movieId]);

  if (!movieDetails) {
    return <div className={styles.loading} >Loading...</div>;
  }

  return (
    <div>
      <button className={styles.button} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
      <div className={styles.containerBox}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      </div>
      <div className={styles.descriptionBox}>
      <h1>{movieDetails.title}</h1>
      <p><span className={styles.overviewTitle}>User Score:</span> {movieDetails.vote_average}</p>
        <p className={styles.overviewTitle}>Overview</p>
        <p>{movieDetails.overview}</p>
          <p className={styles.overviewTitle}>Genres</p>
          <p>{movieDetails.genres.map(genre => genre.name).join(", ")}</p>
      </div>
      </div>
        <div>    
        <h2 className={styles.info}>Additional information:</h2>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;