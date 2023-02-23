import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '@mui/material/Button';
import ChatAgentDialogue from '../components/ChatAgentDialogue'
import DropDownClimate from '../components/dropDownButtons/DropDownClimate';
import DropDownLocation from '../components/dropDownButtons/DropDownLocation';
import styles from '../styles';
import StepTwoClimate from '../components/chatAgentButtons/StepTwoClimate'
import ClimateTable from '../components/fixedTables/ClimateTable';


export default function Home() {
  const [active, setActive] = useState("FirstCard")
  const [name, setName] = useState("")
  const [prompt, setPrompt] = useState("")

  console.log(prompt)

  const toStepTwo = () => {
    setActive("SecondCard")
  }

  const toStepThree = () => {
    setActive("ThirdCard")
  }

  console.log(active)
  return (
    <div style={styles.card}>
        <nav style={{paddingBottom: "20px"}}>
          <Button variant="contained" onClick={() => setActive("FirstCard")}>Step One</Button>
          <Button variant="contained" onClick={() => setActive("SecondCard")}>Step Two</Button>
          <Button variant="contained" onClick={() => setActive("ThirdCard")}>Step Three</Button>
        </nav>
      <div>
      {active === "FirstCard" && 
      <>
      <div style={{display: "flex"}}>
      <img src="holidayChatAgent.png" style={{ height: "220px", width: "220px" }} />
      <Card data={ChatAgentDialogue} cardIndex={0} />
      
      <div style={styles.formStepOne}>
             <label for="fname" style={{fontSize: "22px"}}>Name: </label>
             <input style={{ height: "30px", borderRadius: "4px"}} variant="text" name='fname' onChange={(e) => setName(e.target.value)}/>
             <Button style={{ height: "30px"}} variant="contained" onClick={() => toStepTwo()}>Submit</Button>
        </div>
        </div>
      </>
      }

      {active === "SecondCard" &&  
      <>
      <div style={{display: "flex"}}>
      <img src="holidayChatAgent.png" style={{ height: "220px", width: "220px" }} />
      <h2>Hello {name}!</h2>
      <Card data={ChatAgentDialogue} cardIndex={1} />
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ width: 215 }} onClick={() => toStepThree()}>
      </div>
      <div style={{ width: 215 }} onClick={() => toStepThree()}>
      <DropDownClimate />
      </div>
      <div style={{ width: 215 }} onClick={() => toStepThree()}>
      <DropDownLocation />
      </div>
      <div style={styles.formStepOne}>
             <label for="filter">Prompt: </label>
             <input style={{ height: "30px", borderRadius: "4px"}} variant="text" name='filter' onChange={(e) => setPrompt(e.target.value)}/>
             <Button style={{ height: "30px"}} variant="contained" onClick={() => toStepThree()}>Submit</Button>
        </div>
        </div>
      </>
      }

      {active === "ThirdCard" && 
      <>
      <div style={{display: "flex"}}>
      <img src="holidayChatAgent.png" style={{ height: "220px", width: "220px" }} />
      <h2>Ok {name}!</h2>
      <Card data={ChatAgentDialogue} cardIndex={2} />
      </div>
      <div>
      <ClimateTable  />
      </div>
      </>
      }
      </div>
    </div>
  )
}
