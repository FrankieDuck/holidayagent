import React from 'react'
import styles from '../styles';
import StepTwoContinents from '../components/chatAgentButtons/StepTwoContinents';

export default function Continents() {
  return (
    <div style={styles.pagePadding}>
      <h1 style={styles.centerItem}>From this page you can filter through our holiday packages based on Continents</h1>
      <div>
        <StepTwoContinents />
      </div>
    </div>
  )
}
