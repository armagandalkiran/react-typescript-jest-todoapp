import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { navbarItems } from "../../../models/constants";
import { Navbar } from "../navbar";

describe("Navbar tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render navbar component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    const navbarTitleElement = screen.getByTestId("navbarTitle");
    const navbarDescriptionElement = screen.getByTestId("navbarDescription");
    expect(navbarElement).toBeInTheDocument();
    expect(navbarTitleElement).toHaveTextContent(navbarItems["title"]);
    expect(navbarDescriptionElement).toHaveTextContent(
      navbarItems["description"]
    );
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
