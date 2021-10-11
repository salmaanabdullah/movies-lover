import { all, takeLatest, put, call } from 'redux-saga/effects';
import { Movies } from 'src/services/movies';
import { actionsTypes } from './constants';
import { getMovieDetailsAction, getMovies } from './movies.action';

export function* getMoviesData() {
  try {
    const response = yield call(Movies.get);
    const { page, results, total_pages, total_results } = response.data;
    yield put(
      getMovies.success({
        page,
        results,
        total_pages,
        total_results,
      }),
    );
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(getMovies.error());
  }
}
export function* getMoviesDetails({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(Movies.getById, id);
    yield put(getMovieDetailsAction.success(response.data));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(getMovieDetailsAction.error());
  }
}

export default function* appSettingsSagas() {
  yield all([
    takeLatest(actionsTypes.FETCH_MOVIES.PENDING, getMoviesData),
    takeLatest(actionsTypes.FETCH_MOVIE_DETAILS.PENDING, getMoviesDetails),
  ]);
}
