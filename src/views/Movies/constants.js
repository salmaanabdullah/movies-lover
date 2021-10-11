import { asyncActionType } from 'src/utils/reduxActions';

export const NAMESPACE = 'MOVIES';

const FETCH_MOVIES = asyncActionType(`${NAMESPACE} FETCH_MOVIES`);
const FETCH_MOVIE_DETAILS = asyncActionType(`${NAMESPACE} FETCH_MOVIE_DETAILS`);
const RESET_DETAILS = `${NAMESPACE} RESET_DETAILS`;

export const actionsTypes = {
  FETCH_MOVIES,
  RESET_DETAILS,
  FETCH_MOVIE_DETAILS,
};
