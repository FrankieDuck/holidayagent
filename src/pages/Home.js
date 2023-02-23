import React, { useState, createContext } from 'react'
import Card from '../components/Card'
import Button from '@mui/material/Button';
import ChatAgentDialogue from '../components/ChatAgentDialogue'
import DropDownClimate from '../components/dropDownButtons/DropDownClimate';
import DropDownLocation from '../components/dropDownButtons/DropDownLocation';
import DropDownContinents from '../components/dropDownButtons/DropDownContinents';
import styles from '../styles';
import ClimateTable from '../components/fixedTables/ClimateTable';
import { Context } from '../Context';
import SearchBarStepTwo from '../components/SearchBarStepTwo';

export default function Home() {
  const [context, setContext] = useState("")
  const [active, setActive] = useState("FirstCard")
  const [name, setName] = useState("")
  const [prompt, setPrompt] = useState("")
  const [activeFirstButton, setActiveFirstButton] = useState(true)
  const [activeSecondButton, setActiveSecondButton] = useState(true)
  const [activeThirdButton, setActiveThirdButton] = useState(true)

  const toggleOneButton = () => {
    if (activeFirstButton === true || active === "FirstCard") {
      setActiveSecondButton(!false)
      setActiveThirdButton(!false)
    }
  }

  const toggleTwoButton = () => {
    if (activeSecondButton === true || active === "SecondCard") {
      setActiveFirstButton(!false)
      setActiveThirdButton(!false)
    }
  }

  const toggleThreeButton = () => {
    if (activeThirdButton === true || active === "ThirdCard") {
      setActiveFirstButton(!false)
      setActiveSecondButton(!false)
    }
  }

  console.log(prompt)

  const toStepTwo = () => {
    setActive("SecondCard")
  }

  const toStepThree = () => {
    setActive("ThirdCard")
  }

  return (
    <>
      <div style={styles.card}>
        <Context.Provider value={[context, setContext]}>
          <nav style={{ paddingBottom: "20px", display: "flex", gap: "15px", }}>
            <Button style={{ textTransform: "capitalize", backgroundColor: activeFirstButton ? "coral" : "green" }} variant="contained" onClick={() => { setActive("FirstCard"); setActiveFirstButton(!activeFirstButton); toggleOneButton() }}>Step One</Button>
            <Button style={{ textTransform: "capitalize", backgroundColor: activeSecondButton ? "coral" : "green" }} variant="contained" onClick={() => { setActive("SecondCard"); setActiveSecondButton(!activeSecondButton); toggleTwoButton() }}>Step Two</Button>
            <Button style={{ textTransform: "capitalize", backgroundColor: activeThirdButton ? "coral" : "green" }} variant="contained" onClick={() => { setActive("ThirdCard"); setActiveThirdButton(!activeThirdButton); toggleThreeButton() }}>Step Three</Button>
          </nav>
          <div>
            {active === "FirstCard" &&
              <>
                <div style={{ display: "flex", gap: "40px" }}>
                  <img src="holidayChatAgent.png" style={styles.chatAgentImage} />
                  <Card data={ChatAgentDialogue} cardIndex={0} />
                  <div style={styles.formStepOne}>
                    <label for="fname" style={{ fontSize: "22px" }}>Name: </label>
                    <input style={{ height: "30px", borderRadius: "4px" }} variant="text" name='fname' onChange={(e) => setName(e.target.value)} />
                    <Button style={{ height: "30px" }} variant="contained" onClick={() => toStepTwo()}>Submit</Button>
                  </div>
                </div>
              </>
            }

            {active === "SecondCard" &&
              <>
                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                  <img src="holidayChatAgent.png" style={{ height: "220px", width: "220px", position: "absolute", left: "20px" }} />
                  <div style={{ width: "1300px"}}>
                  <h2> Hello {name}! </h2>
                  <Card data={ChatAgentDialogue} cardIndex={1} />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <div style={{ width: 215 }} onClick={() => toStepThree()}>
                  </div>

                  <div onClick={() => toStepThree()}>
                    <DropDownContinents />
                  </div>

                  <div style={{ width: 215 }} onClick={() => toStepThree()}>
                    <DropDownClimate />
                  </div>

                  <div style={{ width: 215 }} onClick={() => toStepThree()}>
                    <DropDownLocation />
                  </div>
                  <div>

                    <SearchBarStepTwo />
                    <Button style={{ height: "30 px" }} variant="contained" onClick={() => toStepThree()}>Submit</Button>
                  </div>
                </div>
              </>
            }

            {active === "ThirdCard" &&
              <>
                <div style={{ display: "flex" }}>
                  <img src="holidayChatAgent.png" style={{ height: "220px", width: "220px" }} />
                  <h2>Ok {name}!</h2>
                  <Card data={ChatAgentDialogue} cardIndex={2} />
                </div>

                <div>
                  <ClimateTable />
                </div>

              </>
            }
          </div>
        </Context.Provider>
      </div>
    </>
  )
}
