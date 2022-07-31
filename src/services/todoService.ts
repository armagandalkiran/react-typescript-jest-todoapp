import { ServiceTodo, ToDoItems } from "../models/interfaces";

export class TodoService {
  todoProvider: ServiceTodo;
  constructor(todoProvider: ServiceTodo) {
    this.todoProvider = todoProvider;
  }

  async getModifiedTodos() {
    const todos = await this.todoProvider.getTodos();
    if (todos) {
      return todos.sort(
        (a: ToDoItems, b: ToDoItems) =>
          new Date(b.createdAt as Date).getTime() -
          new Date(a.createdAt as Date).getTime()
      );
    }
    return [];
  }

  async postModifiedTodos(data: ToDoItems) {
    const response = await this.todoProvider.postTodos(data);
    return response;
  }

  async patchModifiedTodos(data: ToDoItems) {
    const response = await this.todoProvider.patchTodos(data);
    return response;
  }

  async deleteModifiedTodos(data: ToDoItems) {
    const response = await this.todoProvider.deleteTodos(data);
    return response;
  }
}
