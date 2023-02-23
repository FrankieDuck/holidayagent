import React from 'react';
import { useState } from 'react';
import styles from '../styles';
import { Alert } from '@mui/material';
import { Context } from '../Context';


export default function SearchBarStepTwo() {
    const [prompt, setPrompt] = useState("")

    console.log(prompt)

  return (
    <div>
       <input style={{ height: "30px", borderRadius: "4px"}} variant="text" onChange={(e) => setPrompt(e.target.value)}/>
    </div>
  )
}

