import { render, screen, cleanup } from "@testing-library/react";
import { Navbar } from "../navbar";

afterEach(() => {
  cleanup();
});

test("should render navbar component", () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId("navbar")
  const navbarTitleElement = screen.getByTestId("navbarTitle");
  const navbarDescriptionElement = screen.getByTestId("navbarDescription")
  expect(navbarElement).toBeInTheDocument();
  expect(navbarTitleElement ).toHaveTextContent("My ToDo list");
  expect(navbarDescriptionElement ).toHaveTextContent("lorem ipsum lorem ipsum lorem ipsum");
});
