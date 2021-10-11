import { Map, fromJS } from 'immutable';
import { STATUS } from 'src/constants/Status';
import { actionsTypes } from './constants';
import moviesReducer from './movies.reducer';

describe('Movies Reducer tests', () => {
  it('should not mutate the unknown actions', function () {
    const state = fromJS({});
    const action = {};

    expect(moviesReducer(state, action)).toBe(state);
  });

  it('should set LOADING values for fetch movies', () => {
    const state = fromJS({});
    const action = {
      type: actionsTypes.FETCH_MOVIES.PENDING,
    };
    const expected = new Map({
      status: STATUS.LOADING,
    });
    expect(moviesReducer(state, action)).toEqual(expected);
  });
  it('should set ERROR values for fetch movies', () => {
    const state = fromJS({});
    const action = {
      type: actionsTypes.FETCH_MOVIES.ERROR,
    };
    const expected = new Map({
      status: STATUS.ERROR,
    });
    expect(moviesReducer(state, action)).toEqual(expected);
  });
  it('should set SUCCESS and data values for fetch movies', () => {
    const state = fromJS({});

    const page = 1;
    const results = [{ id: 1, name: 'ABCD' }];
    const total_pages = 10;
    const total_results = 1000;
    const payload = { page: 1, results, total_pages, total_results };

    const action = {
      type: actionsTypes.FETCH_MOVIES.SUCCESS,
      payload: payload,
    };

    const expected = fromJS({
      status: STATUS.SUCCESS,
      page,
      list: results,
      total_pages,
      total_results,
    });
    expect(moviesReducer(state, action)).toEqual(expected);
  });
});
