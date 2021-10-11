import { all, spawn } from 'redux-saga/effects';
import moviesSaga from 'src/views/Movies/movies.saga';

export default function* root() {
  yield all([spawn(moviesSaga)]);
}
