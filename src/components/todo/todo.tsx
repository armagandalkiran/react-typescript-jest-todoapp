import { useState } from "react";
import { defaultValues } from "../../models/constants";
import { TodoListItems } from "../todoListItems";
import { TextInput } from "../textInput";

import "./todo.scss";

export const ToDo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(defaultValues);
  const [error, setError] = useState("");

  const displayError = () => {
    if (error) return <p className="todoErrorMessage">{error}</p>;
    else return;
  };

  return (
    <div className="todoContainer">
      <div className="todoContent">
        <TextInput
          text={text}
          setText={setText}
          setTasks={setTasks}
          setError={setError}
        />
        <div>{displayError()}</div>
        <ul className="todoListContainer">
          {tasks.map((data, idx) => (
            <TodoListItems
              key={idx}
              idx={idx}
              data={data}
              setTasks={setTasks}
              tasks={tasks}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
