import { navbarItems } from "../../models/constants";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <h1 className="navbarTitle">{navbarItems.title}</h1>
      <p className="navbarDescription">{navbarItems.description}</p>
    </nav>
  );
};
