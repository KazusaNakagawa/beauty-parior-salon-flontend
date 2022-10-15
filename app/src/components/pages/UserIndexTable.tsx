import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../modules/Title'
import { Box } from '@mui/material'
import User from '../models/User'

const url = 'http://0.0.0.0:8000'

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

  const classes = useStyles()

  //ユーザー情報を表示する箇所
  return (
    <React.Fragment>
      <Title>User Index</Title>
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
            {users.map(({ id, name, email }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
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
