import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ToDo } from "../../todo";

describe("TodoList tests", () => {
  // test("Todolist component listing", () => {
  //   render(<ToDo />);
  //   const checkbox = screen.getAllByRole("checkbox");

  //   // const defaultTasks = screen.getAllByText(/^default/);
  //   // expect(defaultTasks.length).toEqual(3);
  //   // expect(checkbox.length).toEqual(3);
  //   // expect(deleteButton.length).toEqual(3);
  // });

  // it("should test handlecheckbox method",()=>{
  //   const setStateMock = jest.fn();
  //   const useStateMock:any = (useState:any) => [useState,setStateMock];
  //   jest.spyOn(React,"useState").mockImplementation(useStateMock);
  // })

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
