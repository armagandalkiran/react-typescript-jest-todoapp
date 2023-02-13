import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ToDo } from "../../todo";

describe("TodoList tests", () => {

  test("matches snapshot", () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
