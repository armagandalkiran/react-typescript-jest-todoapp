import { NavbarItems, ToDoItems, ErrorMessages } from "./interfaces";

export const navbarItems: NavbarItems = {
  title: "Armagan's ToDo Project",
  description: "Purpose on this project to learn how react-testing-library and jest work",
};

export const defaultFormInput: string = "";

export const defaultValues: ToDoItems[] = [
  { task: "default 1", completed: true },
  { task: "default 2", completed: false },
  { task: "default 3", completed: false },
];

export const addButton: string = "Ekle";

export const errorMessages: ErrorMessages = {
  isNull: "Warning - Text input can't be empty",
  min: "Warning - Text must be more than 5 characters",
  max: "Warning - Text can't be more than 20 characters",
};

export const alertMessage: string = "You should complete your task first !";
