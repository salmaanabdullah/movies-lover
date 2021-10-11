import { connect } from 'react-redux';
import { getMovieDetails } from '../../movies.selector';
import { getMovieDetailsAction, resetDetails } from '../../movies.action';
import Movie from './Movie';

const mapStateToProps = state => ({ movie: getMovieDetails(state) });

const mapDispatchToProps = {
  resetDetails,
  getMovieDetails: getMovieDetailsAction.pending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
