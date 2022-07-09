import { NavbarItems, ToDoItems, Validations } from "./interfaces";

const validInputRegex: RegExp = /.*\S.*/;

export const navbarItems: NavbarItems = {
  title: "My ToDo list",
  description: "welcome to todolist with typescript and jest",
};

export const defaultFormInput = "";

export const defaultValues: ToDoItems[] = [
  { task: "default 1", completed: false },
  { task: "default 2", completed: false },
  { task: "default 3", completed: false },
];

export const validations: Validations = {
  results: {},
  isNull: function (text: string, errorMessage: string) {
    if (!validInputRegex.test(text)) {
      this.results = {
        ...this.results,
        isNull: { status: false, errorMessage },
      };
      return false;
    } else {
      if (this.results) {
        this.results["isNull"] = { status: true, errorMessage };
      }
      return true;
    }
  },
};
