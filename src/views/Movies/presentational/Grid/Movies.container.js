import { connect } from 'react-redux';
import { getMoviesList } from '../../movies.selector';
import { getMovies } from '../../movies.action';
import Movies from './Movies';

const mapStateToProps = state => ({ movies: getMoviesList(state) });

const mapDispatchToProps = {
  getMovies: getMovies.pending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
