import React, { useState } from "react";
import { defaultValues, defaultFormInput } from "../../models/constants";
import "./todo.scss";

export const ToDo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;
    setText(updatedValue);
  };

  const addTask = () => {
    setTasks((prev) => [...prev, { task: text, completed: false }]);
    setText(defaultFormInput);
  };

  return (
    <div className="todoContainer">
      <div className="todoEntryWrapper">
        <input data-testid="input" value={text} onChange={(e) => handleChange(e)} />
        <button data-testid="button" onClick={addTask}>+</button>
      </div>
      <br />
      <ul>
        {tasks.map((data, idx) => (
          <li key={idx}>{data.task}</li>
        ))}
      </ul>
    </div>
  );
};
