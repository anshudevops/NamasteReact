import React from "react";
import ReactDOM from "react-dom/client";

// 1. create element/tag put sth in it (data) using react
// 2. create root from ReactDOM
// 3. render element inside root
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "HEllow world from react "
);
//takes 3 args tag, obj, content of tag
//obj contains attributes to element

//----------------------------------------

//nested structure

//v.imp
// ReactElement(object) => HTML(Browser understands)
//parent here is object
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm H1 tag inside child "),
    React.createElement("h2", {}, "Hello I'm H2 tag inside child"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
