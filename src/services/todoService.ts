import { ServiceTodo } from "../models/interfaces";

export class TodoService {
  todoProvider: ServiceTodo;
  constructor(todoProvider: ServiceTodo) {
    this.todoProvider = todoProvider;
  }

  async getModifiedTodos() {
    const todos = this.todoProvider.getTodos();
    return todos;
  }
}
