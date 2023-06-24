import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import TodoApp from './Components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      {/* <Counter /> */}
      <TodoApp />
     </div>
    </>
  )
}

export default App
