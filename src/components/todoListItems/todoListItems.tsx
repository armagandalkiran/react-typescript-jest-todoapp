import { ToDoItems, TodoList } from "../../models/interfaces";
import { alertMessage } from "../../models/constants";
import TrashIcon from "../../assets/trash-icon.svg";
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
      alert(alertMessage);
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
        <input
          id="todoCheckbox"
          className="todoActionsCheckbox"
          type="checkbox"
          checked={data.completed}
          onChange={() => handleCheckbox(data)}
        />
        <div className="todoActionsDeleteContainer">
          <img className="todoActionsDelete" onClick={() => handleDelete(data)} src={TrashIcon} alt={data.task}></img>
        </div>
      </div>
    </li>
  );
};
