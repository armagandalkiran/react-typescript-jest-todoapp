import { validations } from "../../utils/validations";
import {
  defaultFormInput,
  addButton,
  errorMessages,
} from "../../models/constants";
import { Results, TextInputs } from "../../models/interfaces";
import "./textInput.scss";
import { TodoProvider } from "../../providers/todoProvider";
import { TodoService } from "../../services/todoService";

export const TextInput = ({
  text,
  setText,
  setTasks,
  setError,
}: TextInputs) => {
  const todoProvider = new TodoProvider();
  const todoService = new TodoService(todoProvider);

  const handleError = (results: object) => {
    for (const key of Object.keys(results)) {
      setError((results as Results)[key].errorMessage);
      break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;
    setText(updatedValue);
  };

  const handleValidate = () => {
    validations
      .input(text)
      .isNull(errorMessages["isNull"])
      .min(5, errorMessages["min"])
      .max(20, errorMessages["max"]);
    if (validations.results && Object.keys(validations.results).length === 0) {
      setError("");
      return true;
    } else if (validations.results) {
      handleError(validations.results);
      return false;
    }
  };

  const addTask = async () => {
    const validInput = handleValidate();
    if (validInput) {
      setTasks((prev) => [{ task: text, completed: false }, ...prev]);
      setText(defaultFormInput);
      await todoService.postModifiedTodos({ task: text, completed: false });
    }
  };

  return (
    <section className="todo__entry--section">
      <div className="todo__entry--wrapper">
        <input
          type="text"
          className="todo__input"
          data-testid="input"
          value={text}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your task.."
        />
        <button className="todo__button" data-testid="button" onClick={addTask}>
          {addButton}
        </button>
      </div>
    </section>
  );
};
