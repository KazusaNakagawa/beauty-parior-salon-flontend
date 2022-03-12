/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'

import './App.css'
import Dashboard from './components/modules/Dashboard'
import { UserIndex } from './components/pages/UserIndex'

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      < UserIndex />
    </div>
  )
}

export default App
