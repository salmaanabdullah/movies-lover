import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { imageBaseUrl } from 'src/constants/config';
import useBreakpoint, { mapBreakPointToImage } from 'src/utils/useBreakPoint';
import styles from './style.module.scss';

const MovieCard = ({ movie }) => {
  const history = useHistory();
  const breakpoint = useBreakpoint();

  const posterPath = movie.get('poster_path');
  const id = movie.get('id');
  const title = movie.get('title');

  const imageSize = mapBreakPointToImage[breakpoint];
  const imageSrc = `${imageBaseUrl}/${imageSize}${posterPath}`;

  const browserHistoryCallback = useCallback(() => history.push(`movies/${id}`), [history, id]);

  return (
    <Card className={styles.card} onClick={browserHistoryCallback}>
      <Card.Img src={imageSrc} alt={title} />
      <div className={styles.titleContainer}>
        <div className={styles.wrapper}>
          <Card.Title className={styles.title}>{title}</Card.Title>
        </div>
      </div>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: ImmutablePropTypes.map.isRequired,
};

export default MovieCard;
