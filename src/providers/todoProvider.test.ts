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
});
