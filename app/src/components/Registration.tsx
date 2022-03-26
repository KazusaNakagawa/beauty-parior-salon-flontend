import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Stack } from '@mui/material'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Title from './modules/Title'

// ref: https://onestepcode.com/creating-a-material-ui-form/

const url = 'http://0.0.0.0:8000'

const defaultValues = {
  name: '',
  email: '',
  password: '',
}

// const useStyles = makeStyles({
//   inputForm: {
//     alignItems: 'center',
//   },
//   registbtn: {
//     background: 'aliceblue',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px aliceblue',
//     color: '#F0F8FF',
//     height: 48,
//     padding: '30px',
//   },
// })

export default function Registration() {
  const [formValues, setFormValues] = useState(defaultValues)

  // 入力のたびに呼ばれる
  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(formValues)

    // API通信を行う箇所
    const options: AxiosRequestConfig = {
      url: `${url}/users`,
      method: 'POST',
      data: formValues,
    }

    axios(options)
      .then(function (response) {
        console.log(response)
        // TODO: モーダルに変更する
        alert('登録しました!')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // const classes = useStyles();

  //ユーザー登録画面
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          {/* <Grid item> */}
          <React.Fragment>
            <Title>User 登録</Title>
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
              <TextField
                id="name-input"
                name="name"
                label="name *"
                variant="standard"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <TextField
                id="email-input"
                name="email"
                label="email *"
                variant="standard"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <TextField
                id="password-input"
                name="password"
                label="password *"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={formValues.password}
                onChange={handleInputChange}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </React.Fragment>
        </Grid>
      </form>
    </>
  )
}
