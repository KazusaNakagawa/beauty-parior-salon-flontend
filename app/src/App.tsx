/*eslint no-lone-blocks: "error"*/
/*eslint-env es6*/

import React from 'react';

import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Timer from './components/modules/Timer'
import Header from './components/modules/Header'


function userArr(users: Array<string>) {
  return users
}

function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}

type MyProps = {
  color: string
}
function Custom({color}: MyProps){
    const users = ["あかね", "いちょう", "うめ", "えり", "おりょう"]

    return (
      <>
        <Stack direction="row" spacing={2}>
          {users.map(user => (
            <Button variant="outlined" color='secondary' onClick={() => {
              alert('clicked');
            }}>
              🐳 {user} ★
            </Button>
          ))}
        </Stack>
        <p>Color: {color}</p>
      </>
    )
}

type DogProps = {
  name: string
  owner: string
}
function Dog({name, owner}: DogProps) {
  return (
    <div>
      <p>Woof: {name}, Owner: {owner}</p>
    </div>
  )
}

function add(n1: number, n2: number) {
  const resurt = n1 * n2
  return resurt
}

function App() {
  const addAdd = add(100, 200);

  return (
    <div className="App">
      {/* <ul>
        {users.map(user => (
          <li>{user}</li>
        ))}
      </ul> */}
      <Dog name='DogName' owner='OwnerName'></Dog>
      <Custom color='ColorName'></Custom>
      <Button variant="contained" color="secondary" style={{ padding: 10 }}>
        {addAdd}
      </Button>
      <Button variant="contained" color="secondary">
        New Button
      </Button>
      <Button variant="outlined">
        Primary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup>
      <Timer />
      <ColorButtons />
    </div>
  )
}

export default App;
