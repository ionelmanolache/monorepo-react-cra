import './App.css'
import { useState } from 'react'
import React from 'react'
import { MyCounter } from '@ima/components'

function App() {
  const [count, setCount] = useState(0);

  const updateCountValue = (value) => {
    console.log('update count to', value);
    setCount(value);
  };

  return (
    <div className="App">
      <h1>{count} seconds</h1>
      <MyCounter startValue={count} updateCount={updateCountValue} />
    </div >
  )
}

export default App