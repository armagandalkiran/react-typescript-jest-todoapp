import { ToDoItems, TodoList } from "../../models/interfaces";
import { deleteButton } from "../../models/constants";
import "./todoListItems.scss";

export const TodoListItems = ({ data, setTasks, tasks, idx }: TodoList) => {
  const handleCheckbox = (data: ToDoItems) => {
    let items = [...tasks];
    let itemIndex = items.indexOf(data);
    let item = items[itemIndex];
    item.completed = !data.completed;
    setTasks(items);
  };

  const handleDelete = (data: ToDoItems) => {
    if (data.completed) {
      setTasks(tasks.filter((task) => task !== data));
    } else {
      alert("You should complete your task first !");
    }
  };
  return (
    <li className="todoListItem">
      <p
        className={`${
          data.completed ? "todoTaskChecked" : "todoTaskNotChecked"
        }`}
      >
        {data.task}
      </p>
      <div className="todoActionsContainer">
        <label className="todoActionsCheckboxLabel" htmlFor="todoCheckbox">
          {idx + 1}
        </label>
        <input
          id="todoCheckbox"
          className="todoActionsCheckbox"
          type="checkbox"
          checked={data.completed}
          onChange={() => handleCheckbox(data)}
        />
        <div className="todoActionsDeleteContainer">
          <button
            onClick={() => handleDelete(data)}
            className="todoActionsDelete"
          >
            {deleteButton}
          </button>
        </div>
      </div>
    </li>
  );
};
