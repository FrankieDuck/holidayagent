import * as React from 'react';
import styles from '../styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const TopNav = () => {

  return (
    <div style={styles.headerWidth}>
      <div style={styles.buttonsNavBar} >
        <Link to="/climate">
          <Button variant="contained" className='Button'>Climate</Button>
        </Link>
        <Link to="/continents">
          <Button variant="contained" className='Button'>Continents</Button>
        </Link>
        <Link to="/">
          <img src="firstholidayltd.logo.png" style={styles.headerIcon} />
        </Link>
        <Link to="/location">
          <Button variant="contained" className='Button'>Location</Button>
        </Link>
        <Link to="/allholidays">
          <Button variant="contained" className='Button'>All Holidays</Button>
        </Link>
      </div>
    </div>

  );
};
export default TopNav;
