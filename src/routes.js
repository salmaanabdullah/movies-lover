import { lazy } from 'react';

const MoviesGrid = lazy(() => import('./views/Movies/presentational/Grid'));
const MovieDetails = lazy(() => import('./views/Movies/presentational/Details'));
const About = lazy(() => import('./views/About'));

const routes = [
  { path: '/movies', exact: true, name: 'Movies', component: MoviesGrid },
  { path: '/movies/:id', name: 'Movie Details', component: MovieDetails },
  { path: '/about', name: 'About', component: About },
];

export default routes;
