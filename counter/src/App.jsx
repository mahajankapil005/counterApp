import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-white'>COUNTER APP</h1>
      <h2 className='text-white'>Value : {counter} </h2>
      <button className='bg-orange-500' onClick={addValue}>ADD VALUE</button>
      <br /><br />
      <button className='bg-orange-500' onClick={removeValue}>REMOVE VALUE</button>
      <p className='text-white'>footer : {counter} </p>
    </>
  )
}

export default App
