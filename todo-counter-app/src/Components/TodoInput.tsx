import React, { ChangeEvent, useState,FormEvent } from 'react'

type TodoInputProps = {
  addTodo:Function
}
const TodoInput = (props:TodoInputProps) => {
  const { addTodo } = props
  const [value, setvalue] = useState<string>("")
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setvalue(event.target.value)
  }
  const handleonSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    if(value.length>0){

      addTodo(value)
      setvalue("")
    }
    return
  }
  return (
    <form onSubmit={handleonSubmit}>
      <input value={value} type="text" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput