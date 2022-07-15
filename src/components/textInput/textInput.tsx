import { validations } from "../../utils/validations";
import {
  defaultFormInput,
  addButton,
  errorMessages,
} from "../../models/constants";
import { Results, TextInputs } from "../../models/interfaces";
import "./textInput.scss";

export const TextInput = ({
  text,
  setText,
  setTasks,
  setError,
}: TextInputs) => {
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

  const addTask = () => {
    const validInput = handleValidate();
    if (validInput) {
      setTasks((prev) => [...prev, { task: text, completed: false }]);
      setText(defaultFormInput);
    }
  };

  return (
    <div className="todoEntryWrapper">
      <input
        type="text"
        className="todoInput"
        data-testid="input"
        value={text}
        onChange={(e) => handleChange(e)}
        placeholder="Enter your task.."
      />
      <button className="todoButton" data-testid="button" onClick={addTask}>
        {addButton}
      </button>
    </div>
  );
};
