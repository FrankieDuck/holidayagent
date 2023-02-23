import * as React from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function DropDownLocation() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <h1>Location</h1>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <LandscapeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Mountains</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocationCityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>City</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
        <MenuItem>
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
