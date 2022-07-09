import React, { useState } from "react";
import { defaultValues, defaultFormInput } from "../../models/constants";
import { validations } from "../../models/constants";
import { Results, ToDoItems } from "../../models/interfaces";

import "./todo.scss";

export const ToDo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(defaultValues);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;
    setText(updatedValue);
  };

  const handleError = (results: object) => {
    for (const key of Object.keys(results)) {
      setError((results as Results)[key].errorMessage);
      break;
    }
  };

  const handleCheckbox = (data: ToDoItems) => {
    let items = [...tasks];
    let itemIndex = items.indexOf(data);
    let item = items[itemIndex];
    item.completed = !data.completed;
    setTasks(items);
  };

  const handleDelete = (data: ToDoItems) => {
    setTasks(tasks.filter((task) => task !== data));
  };

  const addTask = () => {
    const status = validations.isNull(
      text,
      "Warning - Text input can't be empty"
    );
    if (status) {
      setTasks((prev) => [...prev, { task: text, completed: false }]);
      setError("");
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
            type="text"
            className="todoInput"
            data-testid="input"
            value={text}
            onChange={(e) => handleChange(e)}
          />
          <button className="todoButton" data-testid="button" onClick={addTask}>
            Ekle
          </button>
        </div>
        <div>{displayError()}</div>
        <ul className="todoListContainer">
          {tasks.map((data, idx) => (
            <li className="todoListItem" key={idx}>
              <p
                className={`${
                  data.completed ? "todoTaskChecked" : "todoTaskNotChecked"
                }`}
              >
                {data.task}
              </p>
              <div className="todoActionsContainer">
                <input
                  className="todoCheckbox"
                  type="checkbox"
                  checked={data.completed}
                  onChange={() => handleCheckbox(data)}
                />
                <button
                  onClick={() => handleDelete(data)}
                  className="todoActionsDelete"
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
