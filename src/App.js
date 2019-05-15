import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleTodo = index => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <Form
        onSubmit={value => setTodos([...todos, { value, completed: false }])}
      />
      {todos.map(({ value, completed }, i) => (
        <div
          key={value + "-" + Math.random()}
          onClick={() => toggleTodo(i)}
          style={{
            textDecoration: completed ? "line-through" : ""
          }}
        >
          {value}
        </div>
      ))}
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
