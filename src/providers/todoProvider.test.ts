import { TodoProvider } from "./todoProvider";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("TodoProvider", () => {
  it("should return todos", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
          {
            _id: 1,
            completed: true,
            createdAt: "2022-02-28T21:03:35.510Z",
            updatedAt: "2022-03-01T16:44:02.973Z",
            task: "deneme",
          },
        ],
      });
    });
    expect(await todoProvider.getTodos()).toEqual([
      {
        _id: 1,
        completed: true,
        createdAt: "2022-02-28T21:03:35.510Z",
        updatedAt: "2022-03-01T16:44:02.973Z",
        task: "deneme",
      },
    ]);
  });

  it("should return error", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.get.mockImplementation(() => {
      return Promise.reject("Network error");
    });
    expect(await todoProvider.getTodos()).toBe("Network error");
  });

  it("should post todos", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.post.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
      });
    });
    expect(
      await todoProvider.postTodos({ task: "123456", completed: false })
    ).toEqual({ status: 200 });
  });

  it("should return error if there is issue on post", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.post.mockImplementation(() => {
      return Promise.reject({
        status: 500,
      });
    });
    expect(
      await todoProvider.postTodos({ task: "123", completed: false })
    ).toEqual({ status: 500 });
  });

  it("should patch todos", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.patch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
      });
    });
    expect(
      await todoProvider.patchTodos({ task: "123456", completed: true })
    ).toEqual(200);
  });

  it("should return error if there is issue on patch", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.patch.mockImplementation(() => {
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
    mockedAxios.delete.mockImplementation(() => {
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
    ).toEqual(200);
  });

  it("should return error if there is issue on delete", async () => {
    const todoProvider = new TodoProvider();
    mockedAxios.delete.mockImplementation(() => {
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
