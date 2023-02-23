import React from 'react'
import StepTwoLocation from '../components/chatAgentButtons/StepTwoLocation'
import styles from '../styles'

export default function Location() {
  return (
    <div style={styles.pagePadding}>
    <h1 style={styles.centerItem}>From this page you can filter through our holiday packages based on Location</h1>
    <div>
      <StepTwoLocation />
    </div>
  </div>
  )
}
