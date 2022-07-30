import { TodoService } from "./todoService";
import { TodoProvider } from "../providers/todoProvider";

describe("TodoService", () => {
  it("should return todos", async () => {
    const todoProvider = new TodoProvider();
    const mockedGetTodos = jest.spyOn(todoProvider, "getTodos");
    mockedGetTodos.mockImplementation(() => {
      return Promise.resolve([
        {
          _id: 1,
          completed: true,
          createdAt: "2022-02-28T21:03:35.510Z",
          updatedAt: "2022-03-01T16:44:02.973Z",
          task: "deneme",
        },
      ]);
    });
    const todoService = new TodoService(todoProvider);
    expect(await todoService.getModifiedTodos()).toEqual([
      {
        _id: 1,
        completed: true,
        createdAt: "2022-02-28T21:03:35.510Z",
        updatedAt: "2022-03-01T16:44:02.973Z",
        task: "deneme",
      },
    ]);
  });

  it("should return empty array if there is no todos", async () => {
    const todoProvider = new TodoProvider();
    const mockedGetTodos = jest.spyOn(todoProvider, "getTodos");
    mockedGetTodos.mockImplementation(() => {
      return Promise.resolve([]);
    });
    const todoService = new TodoService(todoProvider);
    expect(await todoService.getModifiedTodos()).toEqual([]);
  });

  it("should post todos", async () => {
    const todoProvider = new TodoProvider();
    const mockedPostTodos = jest.spyOn(todoProvider, "postTodos");
    mockedPostTodos.mockImplementation(() => {
      return Promise.resolve({ status: 200 });
    });
    expect(
      await todoProvider.postTodos({ task: "123456", completed: false })
    ).toEqual({ status: 200 });
  });

  it("should patch todos", async () => {
    const todoProvider = new TodoProvider();
    const mockedPatchTodos = jest.spyOn(todoProvider, "patchTodos");
    mockedPatchTodos.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
      });
    });
    expect(
      await todoProvider.patchTodos({ task: "123456", completed: true })
    ).toEqual({"status":200});
  });

  it("should return error if there is issue on patch", async () => {
    const todoProvider = new TodoProvider();
    const mockedPatchTodos = jest.spyOn(todoProvider, "patchTodos");
    mockedPatchTodos.mockImplementation(() => {
      return Promise.reject({
        status: 500,
      });
    });
    expect(
      await todoProvider.patchTodos({ task: "123", completed: false })
    ).toEqual({ status: 500 });
  });

  it("should delete todos", async () => {
    const todoProvider = new TodoProvider();
    const mockedDeleteTodos = jest.spyOn(todoProvider, "deleteTodos");
    mockedDeleteTodos.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
      });
    });
    expect(
      await todoProvider.deleteTodos({
        _id: "123",
        task: "123456",
        completed: true,
      })
    ).toEqual({"status":200});
  });

  it("should return error if there is issue on delete", async () => {
    const todoProvider = new TodoProvider();
    const mockedDeleteTodos = jest.spyOn(todoProvider, "deleteTodos");
    mockedDeleteTodos.mockImplementation(() => {
      return Promise.reject({
        status: 500,
      });
    });
    expect(
      await todoProvider.deleteTodos({
        _id: "123",
        task: "123456",
        completed: true,
      })
    ).toEqual({ status: 500 });
  });
});
