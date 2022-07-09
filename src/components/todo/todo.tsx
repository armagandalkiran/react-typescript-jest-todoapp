import React, { useState } from "react";
import { defaultValues, defaultFormInput } from "../../models/constants";
import { validations } from "../../models/constants";
import { Results } from "../../models/interfaces";

import "./todo.scss";

export const ToDo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(defaultValues);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;
    setText(updatedValue);
    if (validations.isNull(text, "Text input can't be empty")) {
      setError("");
    }
  };

  const handleError = (results: object) => {
    for (const key of Object.keys(results)) {
      setError((results as Results)[key].errorMessage);
      break;
    }
  };

  const addTask = () => {
    const status = validations.isNull(
      text,
      "Warning - Text input can't be empty"
    );
    if (status) {
      setTasks((prev) => [...prev, { task: text, completed: false }]);
    } else {
      if (validations.results) {
        handleError(validations.results);
      }
    }
    setText(defaultFormInput);
  };

  const displayError = () => {
    if (error) return <p className="todoErrorMessage">{error}</p>;
    else return;
  };

  return (
    <div className="todoContainer">
      <div className="todoContent">
        <div className="todoEntryWrapper">
          <input
            className="todoInput"
            data-testid="input"
            value={text}
            onChange={(e) => handleChange(e)}
          />
          <button className="todoButton" data-testid="button" onClick={addTask}>
            +
          </button>
        </div>
        <div>{displayError()}</div>
        <br />
        <ul>
          {tasks.map((data, idx) => (
            <li key={idx}>{data.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
