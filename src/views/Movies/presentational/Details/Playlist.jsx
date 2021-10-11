import React, { memo } from 'react';
import PropTypes from 'prop-types';
import playBtn from 'src/assets/playBtn.svg';
import styles from './style.module.scss';

const Playlist = ({ trailerText }) => (
  <div>
    <div className={styles.videoCard}>
      <img src={playBtn} alt={'play button'} />
      <p className={'mb-0'}>{trailerText}</p>
    </div>
  </div>
);

Playlist.propTypes = {
  trailerText: PropTypes.string,
};

Playlist.defaultProps = {
  trailerText: '',
};

export default memo(Playlist);
