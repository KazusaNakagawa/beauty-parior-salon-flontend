import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import EmailIcon from '@mui/icons-material/Email'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import User from '../models/User'
import '../../App.css'

const url = 'http://0.0.0.0:8000'

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export default function UserIndex() {
  // State処理
  const [users, setUsers] = useState<User[]>([])

  // API通信を行う箇所
  // https://www.freecodecamp.org/news/fetch-data-react/
  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    await fetch(`${url}/users`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {users.map(({ id, name, email }) => (
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  id: {id}
                </Typography>
                <hr />
                <Grid container sx={{ color: 'text.primary' }} spacing={0}>
                  <Grid item xs={1}>
                    <Typography>
                      <AccountCircleIcon />
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    {name}
                  </Grid>
                </Grid>
                <Grid container sx={{ color: 'text.primary' }} spacing={0}>
                  <Grid item xs={1}>
                    <Typography>
                      <EmailIcon />
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    {email}
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
