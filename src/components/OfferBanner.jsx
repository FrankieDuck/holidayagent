import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import styles from '../styles';

function PromoBanner() {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false)
  }, 10000)

  return (
      <Alert icon={false} severity="info" show={visible} style={styles.promoBanner}>
        <h3>
          Keep an eye out for our Easter Holiday deals coming shortly!
        </h3>
      </Alert>
  );
}

export default PromoBanner;