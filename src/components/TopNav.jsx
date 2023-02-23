import * as React from 'react';
import styles from '../styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const TopNav = () => {

  return (
    <div style={styles.headerWidth}>
            <div style={styles.headerIcon} >
            <Link to="/">
            <img src="firstholidayltd.logo.png" style={{ height: "220px", width: "220px"}} /> 
            </Link>
              <Link to="/climate">
              <Button variant="contained">Climate</Button>
              </Link> 
              <Link to="/continents">
              <Button variant="contained">Continents</Button>
              </Link> 
              <Link to="/location">
              <Button variant="contained">Location</Button>
              </Link> 
              <Link to="/allholidays">
              <Button variant="contained">All Holidays</Button>
              </Link> 
            </div>
    </div>

  );
};
export default TopNav;
