import React from "react";
import Navbar from "./Navbar";
import Counter from './Counter';

export default function App() {
  return (
    <div>
      Hello app
      <Navbar name="navbarcomponent" year={2021} description="25.03.2021" />
      <Counter name="counter component" year={2021} description="1:01" />
    </div>
  );
}