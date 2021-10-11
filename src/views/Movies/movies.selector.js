import createSelector from 'src/utils/reselect';
import { List, Map } from 'immutable';

export const getMovies = state => state.get('movies', new Map());

export const getMoviesStatus = createSelector(getMovies, data => data.get('status'));
export const getMoviesList = createSelector(getMovies, data => data.get('list') || new List());
export const getMovieDetails = createSelector(getMovies, data => data.get('details') || new Map());
