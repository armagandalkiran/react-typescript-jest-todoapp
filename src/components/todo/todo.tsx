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
    return error && <p className="todo__error--message">{error}</p>;
  };

  return (
    <div className="todo__container">
      <div className="todo__content">
        <TextInput
          text={text}
          setText={setText}
          setTasks={setTasks}
          setError={setError}
        />
        <div>{displayError()}</div>
        <ul className="todo__list--container">
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
