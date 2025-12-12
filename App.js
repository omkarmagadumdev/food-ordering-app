import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "i am a nested h1 tag"),
      React.createElement("h2", {}, "i am a nested h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "i am a nested h1 tag"),
      React.createElement("h2", {}, "i am a nested h2 tag"),
    ])
  ]
);

// App component return karega parent element
export default function App() {
  return parent;
}
