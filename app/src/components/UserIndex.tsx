// https://zenn.dev/mkt_engr/articles/axios-req-res-typescript
import React, { useState, useEffect } from "react"
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './modules/Title';
import user from "./pages/user.json" // TODO: レスポンスのJSON

const url = "http://0.0.0.0:8000"

 // 画面に表示するユーザー情報の型
type USER = typeof user

const options: AxiosRequestConfig = {
  url: `${url}/users`,
  method: "GET",
}

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function UserIndex() {
  // State処理
  const [users, setUsers] = useState<USER[]>([])
  const [status, setStatus] = useState<number | null>(null)

  const classes = useStyles();

  const responseStyle = {
    color: 'red',
  }

  // API通信を行う箇所
  useEffect(() => {
    axios(options)
      .then((res: AxiosResponse<USER[]>) => {
        const { data, status } = res
        setUsers(data)
        setStatus(status)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        console.log(e.message)
      })
  }, [])

  //ユーザー情報を表示する箇所
  return (
    <React.Fragment>
      <Title>User Index</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ id, name, email}) => (
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
    </React.Fragment>
  )
}
