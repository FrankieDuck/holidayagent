import React, { useContext } from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Context } from '../../Context'
import styles from '../../styles'
import { Divider } from '@mui/material'

export default function DropDownLocation() {
  const [context, setContext] = useContext(Context)

  return (
    <Paper sx={{ width: 320, maxWidth: '100%', boxShadow: "3px 3px #6a4444" }}>
        <h1 style={styles.dropDownTitlePadding}>Location</h1>
        <Divider />
      <MenuList>
        <MenuItem onClick={() => setContext("location-mountain")}>
          <ListItemIcon>
            <LandscapeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Mountains</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem onClick={() => setContext("location-city")}>
          <ListItemIcon>
            <LocationCityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>City</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem onClick={() => setContext("location-sea")}>
          <ListItemIcon>
            <BeachAccessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sea</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}
