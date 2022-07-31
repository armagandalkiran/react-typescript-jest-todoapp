import { ToDoItems } from "../models/interfaces";
import axios from "axios";

export class TodoProvider {
  async getTodos() {
    try {
      const result = await axios.get(
        "https://vast-dusk-47383.herokuapp.com/todos"
      );
      return result.data;
    } catch (err) {
      return err;
    }
  }

  async postTodos(data: ToDoItems) {
    try {
      const response = await axios.post(
        "https://vast-dusk-47383.herokuapp.com/todos",
        data
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  async patchTodos(data: ToDoItems) {
    try {
      const response = await axios.patch(
        `https://vast-dusk-47383.herokuapp.com/todos/${data._id}`,
        data
      );
      return response.status;
    } catch (err) {
      return err;
    }
  }

  async deleteTodos(data: ToDoItems) {
    try {
      const response = await axios.delete(
        `https://vast-dusk-47383.herokuapp.com/todos/${data._id}`
      );
      return response.status;
    } catch (err) {
      return err;
    }
  }
}
