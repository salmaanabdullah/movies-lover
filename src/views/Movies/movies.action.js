import { actionsTypes } from './constants';

export const getMovies = {
  pending: () => ({
    type: actionsTypes.FETCH_MOVIES.PENDING,
  }),
  success: ({ page, results, total_pages, total_results }) => ({
    type: actionsTypes.FETCH_MOVIES.SUCCESS,
    payload: { page, results, total_pages, total_results },
  }),
  error: () => ({
    type: actionsTypes.FETCH_MOVIES.ERROR,
  }),
};

export const getMovieDetailsAction = {
  pending: id => ({
    type: actionsTypes.FETCH_MOVIE_DETAILS.PENDING,
    payload: { id },
  }),
  success: details => ({
    type: actionsTypes.FETCH_MOVIE_DETAILS.SUCCESS,
    payload: { details },
  }),
  error: () => ({
    type: actionsTypes.FETCH_MOVIE_DETAILS.ERROR,
  }),
};

export const resetDetails = () => ({
  type: actionsTypes.RESET_DETAILS,
});
