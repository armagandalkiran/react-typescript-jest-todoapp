import { useEffect, useState } from "react";
import { ToDoItems } from "../../models/interfaces";
import { TodoProvider } from "../../providers/todoProvider";
import { TodoService } from "../../services/todoService";
import { TodoListItems } from "../todoListItems";
import { TextInput } from "../textInput";
import "./todo.scss";

const todoProvider = new TodoProvider();
const todoService = new TodoService(todoProvider);

export const ToDo = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<ToDoItems[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getValues = async () => {
      const result = await todoService.getModifiedTodos();
      setTasks(result);
    };
    getValues();
  }, []);

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
          {tasks.map((data) => (
            <TodoListItems
              key={data._id}
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
