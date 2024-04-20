import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';
import MoviesPage from '../pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from '../pages/components/Navigation/NavLink.jsx';
import MovieCast from '../pages/components/MovieCast/MovieCast.jsx'; 
import MovieReviews from '../pages/components/MovieReviews/MovieReviews.jsx'; 

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} /> 
          <Route path="reviews" element={<MovieReviews />} /> 
        </Route>
        <Route path="/404" element={<NotFoundPage />} /> 
        <Route path="*" element={<Navigate to="/404" />} /> 
      </Routes>
    </div>
  );
}

export default App;