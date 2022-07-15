import { NavbarItems, ToDoItems } from "./interfaces";

export const navbarItems: NavbarItems = {
  title: "My ToDo List",
  description: "welcome to todolist with typescript and jest",
};

export const defaultFormInput: string = "";

export const defaultValues: ToDoItems[] = [
  { task: "default 1", completed: true },
  { task: "default 2", completed: false },
  { task: "default 3", completed: false },
];

export const addButton: string = "Ekle";
export const deleteButton: string = "-";

export const errorMessages = {
  isNull: "Warning - Text input can't be empty",
  min: "Warning - Text must be more than 5 characters",
  max: "Warning - Text can't be more than 20 characters",
};
