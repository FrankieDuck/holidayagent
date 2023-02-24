import React from 'react';
import { useState, useContext } from 'react';
import styles from '../styles';
import { Alert } from '@mui/material';
import { Context } from '../Context';
import Button from '@mui/material/Button';


  const acceptAnswers = [
  {
  prompts: ["europe", "africa", "north america", "australia", "antartica", "asia",
   "artic", "hot", "mild", "cold", "mountains", "city", "sea"]
}
]

export default function SearchBarStepTwo(progressToStepThree) {
    const [context, setContext] = useContext(Context)
    const [prompt, setPrompt] = useState("")
    const [alert, setAlert] = useState(false);


//this function will take the input from the end user and then map through the acceptAnswers to find a match
  function handleUserPromptCheck(prompt) {
    
    acceptAnswers.forEach((value, index) => {
          if (prompt === "hot") {
            setContext(`temp-${prompt}`)
         } else if (prompt === "mild") {
            setContext(`temp-${prompt}`)
         } else if (prompt === "cold") {
            setContext(`temp-${prompt}`)
         } else if (prompt === "mountain") {
            setContext(`location-${prompt}`)
         } else if (prompt === "city") {
            setContext(`location-${prompt}`)
         } else if (prompt === "sea") {
            setContext(`location-${prompt}`)
         } else {
          setContext(`continent-${prompt}`)
         }
      if (value.prompts.includes(prompt)) {
        setAlert(false)   

      } else {
        setAlert(true)
        setTimeout(() => {
          setAlert(false);
        }, 4000);
      }
    })
  }

  console.log(prompt)

  return (
    <div style={{ display: "flex", alignItems: "flex-end"}}>
       <input style={{ height: "30px", borderRadius: "4px"}} variant="text" onChange={(e) => {setPrompt(e.target.value.toLowerCase()); }}/>
       <Button style={{ height: "30 px", marginTop: "10px", marginLeft: "45px", backgroundColor: "green" }} variant="contained" onClick={() => handleUserPromptCheck(prompt)}>Submit</Button>
       {alert ? <Alert severity='error' style={{maxWidth: "200px"}}>I'm sorry, I could not find any holidays with {prompt}. Try something North America, Mountains, or Hot</Alert> : <div {...() => progressToStepThree("ThirdCard")}></div>}
    </div>
  )
}


