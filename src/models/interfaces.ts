export interface NavbarItems {
  title: string;
  description: string;
}

export interface ToDoItems {
  _id?: string;
  task: string;
  completed: boolean;
  createdAt?: Date;
}

export interface TodoList {
  data: ToDoItems;
  tasks: ToDoItems[];
  setTasks: (value: ToDoItems[]) => void;
}

export interface TextInputs {
  text: string;
  setText: (value: string) => void;
  setTasks: (
    value: ToDoItems[] | ((prevVar: ToDoItems[]) => ToDoItems[])
  ) => void;
  setError: (value: string) => void;
}

export interface ResultItem {
  errorMessage: string;
}

export interface Results {
  [key: string]: ResultItem;
}

export interface Validations {
  input: (text: string) => Validations;
  isNull: (errorMessage: string) => Validations;
  min: (number: number, errorMessage: string) => Validations;
  max: (number: number, errorMessage: string) => Validations;
  results?: Results;
  testedValue: string;
}

export interface ErrorMessages {
  [key: string]: string;
}

export interface Alert {
  type: string;
}

export interface ServiceTodo {
  constructor: Function;
  getTodos: Function;
  postTodos: Function;
  patchTodos: Function;
  deleteTodos: Function;
}
