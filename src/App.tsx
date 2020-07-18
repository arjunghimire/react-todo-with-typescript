import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [state, setstate] = useState(0);
  return (
    <div className="App">
      <TodoList name="Arjun Ghimire" />
    </div>
  );
}

export default App;
