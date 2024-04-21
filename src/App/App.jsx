import React from 'react';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation/NavLink.jsx';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage.jsx'));
const MoviesPage = React.lazy(() => import('../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = React.lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage/NotFoundPage.jsx'));
const MovieCast = React.lazy(() => import('../components/MovieCast/MovieCast.jsx'));
const MovieReviews = React.lazy(() => import('../components/MovieReviews/MovieReviews.jsx'));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;