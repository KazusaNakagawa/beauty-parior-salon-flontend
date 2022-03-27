/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/
import React from 'react'

import Dashboard from '../modules/Dashboard'
import Registration from '../Registration'

export default function UserRegstPage() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Registration />
    </div>
  )
}
