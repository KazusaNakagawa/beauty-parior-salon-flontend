/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './components/modules/Dashboard'
import UserRegst from './components/pages/UserRegstraPage'
import UserIndex from './components/UserIndex'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<UserIndex />} />
          <Route path="/user-regst" element={<UserRegst />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
