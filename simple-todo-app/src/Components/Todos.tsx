import React, { useState } from 'react';


type Todo = {
    id:number;
    title:string;
    status:boolean
}

const Todos = () => {
    const [text, settext] = useState<string>("");
    const [todos, settodos] = useState<Todo[]>([])
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <input type="text" value={text} onChange={e =>settext(e.target.value)} style={{padding:'0.5rem 2rem'}} />
        <button onClick={()=>{
            settodos([...todos,{id:1234,title:text,status:true}])
        }}>Add Todos</button>
        <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
            {
                todos.map((todo)=>(
                    <div key={todo.id}>{todo.title} -- {todo.status?'Done':'Not done'}</div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Todos