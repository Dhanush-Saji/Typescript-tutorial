import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
type Todos = {
  id: number;
  content: string;
  isCompleted: boolean;
};
const TodoApp = () => {
  const [todos, settodos] = useState<Todos[]>([]);
  const addTodo = (content:string) =>{
    settodos([...todos,{
      id:Date.now(),
      content,
      isCompleted: false
    }])
  }
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoApp;
