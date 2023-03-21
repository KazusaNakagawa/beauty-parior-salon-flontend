import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import User from '../models/User'
import CheckCookie from '../modules/CheckCookie'

function preventDefault(event: any) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export default function UserIndex() {
  // State処理
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

  const classes = useStyles()

  //ユーザー情報を表示する箇所
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          p: 2,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ id, username, email }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
          </Link>
        </div>
      </Box>
    </React.Fragment>
  )
}
