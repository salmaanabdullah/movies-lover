import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import movies from 'src/views/Movies/movies.reducer';

const createRootReducer = history =>
  combineReducers({
    movies,
    router: connectRouter(history),
  });

export default createRootReducer;
