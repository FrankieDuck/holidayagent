import React, { useState } from 'react'
import Button from '@mui/material/Button';
import styles from '../styles';
import StepTwoClimate from '../components/chatAgentButtons/StepTwoClimate';

export default function Climate() {
  const [name, setName] = useState("")

  return (
    <div>
      <h1>From this page you can filter through our holiday packages based on Climate</h1>
      <div>
        <StepTwoClimate />
      </div>
    </div>
  )
}
