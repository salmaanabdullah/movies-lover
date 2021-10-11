import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Row, Col, Container } from 'react-bootstrap';
import MovieCard from '../MovieCard';
import styles from './style.module.scss';

const Movies = props => {
  const { getMovies, movies } = props;

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // useEffect(() => {
  //   throw new Error('Oh no!'); // todo if you want to test ErrorBoundry
  // }, []);

  const movieColumns = movies
    ? movies.map(movie => (
        <Col className={styles.movieColumn} key={movie.get('id')} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))
    : null;

  return (
    <Container fluid>
      <Row>{movieColumns}</Row>
    </Container>
  );
};

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: ImmutablePropTypes.list.isRequired,
};

export default Movies;
