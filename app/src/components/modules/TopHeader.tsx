import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core'
import StartIcon from '@mui/icons-material/Start'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h6">ExSample</Typography>
        </IconButton>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit">Docs</Button>
          <Button color="inherit">Info</Button>
          <Button color="inherit">Help</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit" variant="outlined" startIcon={<StartIcon />}>
            Get started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
