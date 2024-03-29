import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import EmailIcon from '@mui/icons-material/Email'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import axios from '../../config/axios'
import { GridItem } from '../modules/GridItem'
import { User } from '../models/User'
import { CheckCookie } from '../modules/CheckCookie'

export function UserIndex() {
  const [users, setUsers] = useState<User[]>([])
  const checkCookie = CheckCookie()
  const navigate = useNavigate()
  const accessToken = checkCookie('auth_token', 'Please Again Login', '/about')

  useEffect(() => {
    /*
      API communication handling
      Ref: https://www.freecodecamp.org/news/fetch-data-react/
      
      curl -X 'GET' \
        'http://localhost:8000/users/?skip=0&limit=100' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxx ...'
    */
    axios
      .get(`/users/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data)
      })
      .catch(function (err) {
        alert(err)
        navigate('/')
      })
  }, [accessToken, navigate])

  return (
    <div>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          {users.map(({ id, username, email }) => (
            <Grid item xs={12} sm={6} lg={4} key={id}>
              <Card sx={{ maxWidth: 345 }} variant="outlined">
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                {/* TODO: hard court image tag */}
                <CardMedia
                  component="img"
                  height="194"
                  image="/static/images/cards/images.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    id: {id}
                  </Typography>
                  <hr />
                  <GridItem
                    element={{
                      icon: <AccountCircleIcon />,
                      itemVal: username,
                      fontSize: 14,
                    }}
                  />
                  <GridItem
                    element={{
                      icon: <EmailIcon />,
                      itemVal: email,
                      fontSize: 14,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  )
}
