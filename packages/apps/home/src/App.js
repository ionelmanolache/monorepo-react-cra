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

  const countProps = {
    initCount: count,
    updateCount: updateCountValue
  }

  return (
    <div className="App">
      <h1>{count} seconds</h1>
      <MyCounter {...countProps}>
        <h1>hello</h1>
      </MyCounter>
    </div >
  )
}

export default App