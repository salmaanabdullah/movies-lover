import { fromJS, Map } from 'immutable';
import { STATUS } from 'src/constants/Status';
import { getMovieDetails, getMovies, getMoviesList, getMoviesStatus } from './movies.selector';

describe('MovieSelector', () => {
  const state = fromJS({
    movies: {
      status: STATUS.LOADING,
      page: 0,
      list: [{ title: 'ABCD', id: 8977 }],
      total_pages: 0,
      total_results: 0,
      detailsStatus: null,
      details: { title: 'ABCD', id: 8977 },
    },
  });

  it('Should return the movies object', () => {
    const result = getMovies(state);
    const expected = new fromJS({
      status: STATUS.LOADING,
      page: 0,
      list: [{ title: 'ABCD', id: 8977 }],
      total_pages: 0,
      total_results: 0,
      detailsStatus: null,
      details: { title: 'ABCD', id: 8977 },
    });
    expect(result).toEqual(expected);
  });
  it('should return the MovieStatus', () => {
    const result = getMoviesStatus(state);
    const expected = STATUS.LOADING;
    expect(result).toEqual(expected);
  });

  it('should return the MoviesList', () => {
    const result = getMoviesList(state);
    const expected = fromJS([{ title: 'ABCD', id: 8977 }]);
    expect(result).toEqual(expected);
  });
  it('should return the MovieDetails', () => {
    const result = getMovieDetails(state);
    const expected = new Map({ title: 'ABCD', id: 8977 });
    expect(result).toEqual(expected);
  });
});
