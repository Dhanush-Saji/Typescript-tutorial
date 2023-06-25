import { MouseEventHandler, useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface User{
  id:number,
  username:string
}
function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setusers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef.current?.value)

  useEffect(()=>{
    console.log('Mounting')
    console.log('Users:',users)

    return () => console.log('Unmounting')
  },[])

  const addTwo: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
        <input type="text" ref={inputRef} />
      </div>
    </>
  )
}

export default App
