import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { imageBaseUrl } from 'src/constants/config';
import useBreakpoint, { mapBreakPointToImage } from 'src/utils/useBreakPoint';
import Playlist from 'src/views/Movies/presentational/Details/Playlist';
import styles from './style.module.scss';

const Movie = ({ getMovieDetails, resetDetails, movie }) => {
  const { id } = useParams();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    getMovieDetails(id);

    return () => resetDetails();
  }, [getMovieDetails, id, resetDetails]);

  const title = movie.get('title');
  const runtime = movie.get('runtime');
  const overview = movie.get('overview');
  const posterPath = movie.get('poster_path');
  const releaseDate = movie.get('release_date');
  const voteAverage = movie.get('vote_average');

  const imageSize = mapBreakPointToImage[breakpoint];

  const imageSrc = `${imageBaseUrl}/${imageSize}${posterPath}`;

  return (
    <div>
      <div className={styles.title}>
        <p className={'mx-4'}>{title}</p>
      </div>
      <div className={'mx-4'}>
        <Row className={styles.media}>
          <Col xs={6} lg={3}>
            {posterPath && <Card.Img src={imageSrc} alt={title} />}
          </Col>
          <Col xs={6} lg={3} className={styles.details}>
            <div>
              <p className={styles.releaseDate}>{releaseDate}</p>
              <p className={styles.duration}>{`${runtime} mins`}</p>
              <b>{voteAverage}/10</b>
              <br />
            </div>
            <Button className={styles.favoriteBtn} variant={'primary'}>
              Add to Favorite
            </Button>
          </Col>
        </Row>

        <p className={styles.overview}>{overview}</p>
        <b>TRAILERS</b>
        <hr />
        <Playlist trailerText="Play trailer 1" />
        <Playlist trailerText="Play trailer 2" />
      </div>
    </div>
  );
};
Movie.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  resetDetails: PropTypes.func.isRequired,
  movie: ImmutablePropTypes.map.isRequired,
};

export default Movie;
