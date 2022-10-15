import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import EmailIcon from '@mui/icons-material/Email'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Title from '../modules/Title'
import GridItem from '../modules/GridItem'

import User from '../models/User'
import '../../App.css'

const url = 'http://0.0.0.0:8000'

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
    <React.Fragment>
      <Title>User Index</Title>
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
                  <GridItem
                    element={{ icon: <AccountCircleIcon />, itemVal: name }}
                  />
                  <GridItem element={{ icon: <EmailIcon />, itemVal: email }} />
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </React.Fragment>
  )
}
