import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from '../styles';

const TopNav = () => {

  return (
    <div style={styles.headerWidth}>
      <div style={styles.navBar} >
        <Link to="/climate" style={styles.linkRadius}>
          <Button variant="contained" style={styles.buttonsNavBar}>Climate</Button>
        </Link>
        <Link to="/continents" style={styles.linkRadius}>
          <Button variant="contained" style={styles.buttonsNavBar}>Continents</Button>
        </Link>
        <Link to="/" >
          <img src="firstholidayltd.logo.png" style={styles.headerIcon} />
        </Link>
        <Link to="/location" style={styles.linkRadius}>
          <Button variant="contained" style={styles.buttonsNavBar}>Location</Button>
        </Link>
        <Link to="/allholidays" style={styles.linkRadius}>
          <Button variant="contained" style={styles.buttonsNavBar}>All Holidays</Button>
        </Link>
      </div>
    </div>

  );
};
export default TopNav;
