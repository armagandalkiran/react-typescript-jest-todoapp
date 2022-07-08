import React from "react";
import "./common.scss";
import { Navbar } from "./components/navbar";
import { ToDo } from "./components/todo";

function App() {
  return (
    <>
      <Navbar />
      <ToDo />
    </>
  );
}

export default App;
