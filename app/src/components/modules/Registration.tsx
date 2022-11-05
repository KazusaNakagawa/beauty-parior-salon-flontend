import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Button, TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { AxiosRequestConfig } from 'axios'
import axios from '../../config/axios'
import Title from './Title'

// ref: https://onestepcode.com/creating-a-material-ui-form/
const defaultValues = {
  username: '',
  email: '',
  password: '',
}

const useStyles = makeStyles({
  inputForm: {
    alignItems: 'center',
    marginBottom: '15px',
  },
  registbtn: {
    background: 'aliceblue',
    alignItems: 'center',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px aliceblue',
    color: '#F0F8FF',
    height: 40,
  },
})

export default function Registration() {
  const [formValues, setFormValues] = useState(defaultValues)
  const classes = useStyles()

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
    console.log({ formValues: formValues })

    // API通信を行う箇所
    const options: AxiosRequestConfig = {
      url: `/users/`,
      method: 'POST',
      data: formValues,
    }

    axios(options)
      .then(function (response) {
        console.log(response.data)
        // TODO: モーダルに変更する
        alert('登録しました!')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //ユーザー登録画面
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          {/* <Grid item> */}
          <React.Fragment>
            <Title>User 登録</Title>
            <Box
              className={classes.inputForm}
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
                name="username"
                label="name *"
                variant="standard"
                value={formValues.username}
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
            </Box>
            <Button
              className={classes.registbtn}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </React.Fragment>
        </Grid>
      </form>
    </>
  )
}
