export interface NavbarItems {
  title: string;
  description: string;
}

export interface ToDoItems {
  task: string;
  completed: boolean;
}

export interface ResultItem {
  status:boolean,
  errorMessage:string
}

export interface Results {
  [key:string] : ResultItem;
}

export interface Validations {
  results?: Results;
  isNull: (text: string, errorMessage: string) => boolean;
}
