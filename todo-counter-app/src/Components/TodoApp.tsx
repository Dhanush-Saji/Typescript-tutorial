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
  return (
    <div>
      <TodoInput />
      {todos.map((todo) => (
        <Todo />
      ))}
    </div>
  );
};

export default TodoApp;
