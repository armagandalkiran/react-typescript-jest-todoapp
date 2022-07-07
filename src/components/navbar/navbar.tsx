import React from "react";
import { navbarItems } from "../../models/constants";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav data-testid="navbar" className="navbarContainer">
      <h1 data-testid="navbarTitle">{navbarItems.title}</h1>
      <p data-testid="navbarDescription">{navbarItems.description}</p>
    </nav>
  );
};
