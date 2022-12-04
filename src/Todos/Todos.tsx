import React, { memo } from 'react';

interface TodosProps {
  todos: string[];
  addTodo: () => void;
}
const Todos = memo(function Todos({ todos, addTodo }: TodosProps) {
  console.log('child render');

  function add() {
    addTodo();
  }
  return (
    <div className="content">
      <h2>My todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={add}>Add todo</button>
    </div>
  );
});

export { Todos };
