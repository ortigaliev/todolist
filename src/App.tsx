import React, { useState } from "react";

import "./App.css";
import { ITask } from "./interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Add a text" />
          <input
            type="number"
            name="deadline"
            placeholder="Set a deadline(in day)"
          />
          <button>Add</button>
        </div>
        <div className="todoList"></div>
      </div>
    </div>
  );
};

export default App;
