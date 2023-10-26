import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(15)

  // let counter= 15

  const addvalue = () =>{
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Code with React {counter}</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addvalue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>

    <footer>footer:{counter}</footer>
    </>
  )
}

export default App
