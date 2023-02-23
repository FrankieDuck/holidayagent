import React, { useContext } from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import { GiAfrica, GiFrance,GiSouthAmerica, GiAustralia, GiAntarctica, GiJapan, GiIceberg } from 'react-icons/gi';
import { Context } from '../../Context'

export default function DropDownContinents() {
  const [context, setContext] = useContext(Context)

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <h1>Continents</h1>

      <MenuList>
        <MenuItem onClick={() => setContext("continent-europe")}>
          <ListItemIcon>
          <GiFrance />
          </ListItemIcon>
          <ListItemText>Europe</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

       
        <MenuItem onClick={() => setContext("continent-africa")}>
          <ListItemIcon>
          <GiAfrica />
          </ListItemIcon>
          <ListItemText>Africa</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("continent-north-america")}>
          <ListItemIcon>
          <GiSouthAmerica />
          </ListItemIcon>
          <ListItemText>North America</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("continent-australia")}>
          <ListItemIcon>
          <GiAustralia />
          </ListItemIcon>
          <ListItemText>Australia</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("continent-asia")}>
          <ListItemIcon>
          <GiJapan />
          </ListItemIcon>
          <ListItemText>Asia</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("continent-antartica")}>
          <ListItemIcon>
          <GiAntarctica />
          </ListItemIcon>
          <ListItemText>Antartica</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>

        <MenuItem onClick={() => setContext("continent-arctic")}>
          <ListItemIcon>
          <GiIceberg />
          </ListItemIcon>
          <ListItemText>Arctic</ListItemText>
          <Typography variant="body2" color="text.secondary"></Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}
