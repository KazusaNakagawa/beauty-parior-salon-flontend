/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'

import './App.css'
import Dashboard from './components/modules/Dashboard'
import Registration from './components/Registration'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Registration />
    </div>
  )
}

export default App
