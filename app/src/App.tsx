/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/modules/Dashboard'
import SignIn from './components/pages/Signin'
import UserRegst from './components/pages/UserRegst'
import { useFetch } from 'react-async'
import UserIndexTable from './components/pages/UserIndexTable'

// To be replaced by the endpoint of the API deployed through the CloudFormation Template
const APIEndPoint =
  'http://xxxxx.execute-api.ap-northeast-1.amazonaws.com/v1'


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/about" element={<Dashboard barName="Dash Board" />} />
          <Route
            path="/users"
            element={<Dashboard name={<UserIndexTable />} barName="Users" />}
          />
          <Route path="/setting" element={<Dashboard barName="Setting" />} />
          <Route path="/user-regst/" element={<UserRegst />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: 'application/json' },
  })
  if (error) return <p>{error.message}</p>
  // TODO: Type 'unknown' is not assignable to type 'ReactNode'.
  // if (data) return <p>{data}</p>
  return null
}

export default App
