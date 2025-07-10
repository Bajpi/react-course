import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter((counter) => counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  console.log('Counter Value:', counter)
  return (
    <>
      <h1>React Course with hitesh !</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> {}
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
