import React from 'react'
import Button from '@mui/material/Button';
import styles from '../styles';

export default function Continents() {
  return (
    <div>
    <h1>From this page you can filter through our holiday packages based on Continents</h1>
  <div style={styles.formStepOne}>
    <Button variant="contained">Europe</Button>
    <Button variant="contained">Africa</Button>
    <Button variant="contained">North America</Button>
    <Button variant="contained">South America</Button>
    <Button variant="contained">Australia</Button>
    <Button variant="contained">Asia</Button>
    <Button variant="contained">Antartica</Button>
    <Button variant="contained">Arctic</Button>
  </div>
  </div>
  )
}
