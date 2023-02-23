import React, { useState, useContext } from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ClimateTable from '../fixedTables/ClimateTable'
import styles from '../../styles'
import { Context } from '../../Context'
import { Divider } from '@mui/material'


export default function DropDownClimate() {
const [context, setContext] = useContext(Context)

  return (
    <>
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <h1 style={styles.dropDownTitlePadding}>Climate</h1>
        <Divider/>
      <MenuList>
        <MenuItem onClick={() => setContext("temp-hot")}>
          <ListItemIcon >
            <WbSunnyIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Hot</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("temp-mild")}>
          <ListItemIcon>
            <ThermostatIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Mild</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("temp-cold")}>
          <ListItemIcon>
            <AcUnitIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cold</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
      </MenuList>
    </Paper>

    <div>
    </div>
    </>
  )
}
