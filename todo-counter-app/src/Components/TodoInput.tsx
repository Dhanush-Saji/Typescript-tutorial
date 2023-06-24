import React, { ChangeEvent, useState,FormEvent } from 'react'

const TodoInput = () => {
  const [value, setvalue] = useState<string>("second")
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{

  }
  const handleonSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={handleonSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput