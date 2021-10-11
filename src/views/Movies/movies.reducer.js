import { fromJS, Map } from 'immutable';
import { STATUS } from 'src/constants/Status';
import { actionsTypes } from './constants';

const initialState = fromJS({
  status: null,
  page: 0,
  list: [],
  total_pages: 0,
  total_results: 0,
  detailsStatus: null,
  details: {},
});

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.FETCH_MOVIES.PENDING:
      return state.set('status', STATUS.LOADING);
    case actionsTypes.FETCH_MOVIES.SUCCESS:
      return state
        .set('status', STATUS.SUCCESS)
        .set('page', payload.page)
        .set('list', fromJS(payload.results))
        .set('total_pages', payload.total_pages)
        .set('total_results', payload.total_results);
    case actionsTypes.FETCH_MOVIES.ERROR:
      return state.set('status', STATUS.ERROR);

    case actionsTypes.FETCH_MOVIE_DETAILS.PENDING:
      return state.set('detailsStatus', STATUS.LOADING);
    case actionsTypes.FETCH_MOVIE_DETAILS.SUCCESS:
      return state.set('detailsStatus', STATUS.SUCCESS).set('details', new Map(payload.details));
    case actionsTypes.FETCH_MOVIE_DETAILS.ERROR:
      return state.set('detailsStatus', STATUS.ERROR);

    case actionsTypes.RESET_DETAILS:
      return state.set('details', new Map());

    default:
      return state;
  }
};
export default moviesReducer;
