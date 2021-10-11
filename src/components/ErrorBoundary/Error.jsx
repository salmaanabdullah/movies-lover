import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Error.scss';

const Error = () => {
  const onClickBack = () => window.location.reload();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1>Oops!</h1>
          <p>Something went wrong.</p>
          <div className={styles.btnContainer}>
            <Button variant={'primary'} onClick={onClickBack}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
