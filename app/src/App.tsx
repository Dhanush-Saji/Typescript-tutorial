
import { useState } from 'react'
import './App.css'
import Todos from './Components/Todos';

function App() {
  const [first, setfirst] = useState('')
  const changeSetFirst = ()=>{
    setfirst('5')
  }
  return (
    <>
    <div>
      <Todos />
    </div>
    </>
  )
}

export default App
