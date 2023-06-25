import React from 'react'
type TodoItemContent = {
  id:number,
  content:string,
  isCompleted:boolean
}
const Todo = ({id,content,isCompleted}:TodoItemContent) => {
  return (
    <div>
      <div>
        <span>{content}</span>
        <span>{isCompleted?"Compledted":"Not completed"}</span>
      </div>
    </div>
  )
}

export default Todo