import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/layout';

const Cast = lazy(() => import('components/Cast/cast'));
const Reviews = lazy(() => import('components/Reviews/reviews'));
const Home = lazy(() => import('pages/Home/home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/movieDetails'));
const Movies = lazy(() => import('pages/Movies/movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
