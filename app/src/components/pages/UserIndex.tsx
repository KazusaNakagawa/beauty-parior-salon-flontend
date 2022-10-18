import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import EmailIcon from '@mui/icons-material/Email'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import '../../App.css'
import axios from '../../config/axios'
import GridItem from '../modules/GridItem'
import Title from '../modules/Title'
import User from '../models/User'

export default function UserIndex() {
  // State処理
  const [users, setUsers] = useState<User[]>([])

  // API通信を行う箇所
  // https://www.freecodecamp.org/news/fetch-data-react/
  useEffect(() => {
    axios.get(`/users`).then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      <Title>User Index</Title>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          {users.map(({ id, name, email }) => (
            <Card variant="outlined" key={id}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  id: {id}
                </Typography>
                  <hr />
                <GridItem
                  element={{ icon: <AccountCircleIcon />, itemVal: name, fontSize: 14 }}
                />
                <GridItem element={{ icon: <EmailIcon />, itemVal: email, fontSize: 14}} />
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  )
}
