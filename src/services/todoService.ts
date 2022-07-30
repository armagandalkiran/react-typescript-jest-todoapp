import { ServiceTodo, ToDoItems } from "../models/interfaces";

export class TodoService {
  todoProvider: ServiceTodo;
  constructor(todoProvider: ServiceTodo) {
    this.todoProvider = todoProvider;
  }

  async getModifiedTodos() {
    const todos = this.todoProvider.getTodos();
    return todos ? todos : [];
  }

  async postModifiedTodos(data: ToDoItems) {
    const response = this.todoProvider.postTodos(data);
    return response;
  }

  async patchModifiedTodos(data: ToDoItems) {
    const response = this.todoProvider.patchTodos(data);
    return response;
  }

  async deleteModifiedTodos(data:ToDoItems){
    const response = this.todoProvider.deleteTodos(data);
    return response;
  }
}
