import { call, put } from 'redux-saga/effects';
import { Movies } from 'src/services/movies';
import { getMovieDetailsAction, getMovies } from './movies.action';
import * as moviesSaga from './movies.saga';
describe('Movies Saga Tests', () => {
  it('getMoviesData', () => {
    const page = 1;
    const results = [];
    const total_pages = 0;
    const total_results = 0;
    const response = {
      data: { page, results, total_pages, total_results },
    };
    const gen = moviesSaga.getMoviesData();
    expect(gen.next().value).toEqual(call(Movies.get));
    expect(gen.next(response).value).toEqual(
      put(getMovies.success({ page, results, total_pages, total_results })),
    );
  });
  it('getMoviesDetails', () => {
    const page = 1;
    const results = [];
    const total_pages = 0;
    const total_results = 0;
    const response = {
      data: { page, results, total_pages, total_results },
    };
    const payload = { id: 1 };

    const gen = moviesSaga.getMoviesDetails({ payload });
    expect(gen.next().value).toEqual(call(Movies.getById, payload.id));
    expect(gen.next(response).value).toEqual(put(getMovieDetailsAction.success(response.data)));
  });
});
