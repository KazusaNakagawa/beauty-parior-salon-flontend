/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './components/modules/Dashboard'

import SignIn from './components/pages/Signin'
import UserRegst from './components/pages/UserRegstraPage'
import UserIndex from './components/pages/UserIndex'

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/sing-in/" element={<SignIn />} />
          <Route path="/" element={<Dashboard name={<UserIndex />} />} />
          <Route
            path="/user-regst/"
            element={<Dashboard name={<UserRegst />} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App
