import React from "react";
import ReactDOM from "react-dom/client";

//react element at EOD is an object,
//-->>created ReactElement using React.CreateElement
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using react.createElement"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX -- HTML like syntax but not HTML
//  //-->>created ReactElement using JSX
const jsxHeading = <h1 id="headingTwo"> Namaste React using JSX</h1>;
//ReactDOM lib will take you object render it on browser as HTML element
root.render(heading);

//summary

// react.creatElement => ReactElement (which object) => HTML-ELEMENT (render)
//JSX -> babel transpiles it to => react.creatElement => ReactElement (which object) => HTML-ELEMENT (render)
