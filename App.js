import React from "react";
import ReactDOM from "react-dom/client";
import "./app.scss";
// import FormVAlidationUsingLib from "./src/snippets/react_form/FormvalidationUsingLIB/FormVAlidationUsingLib";
import {SwiggyLayout} from "./src/swiggy/SwiggyLayout";
import { FormValidation } from "./src/snippets/react_form/formValidation";
import { ComponentLifecycle } from "./src/interview/componentLifecycle";
import { MediaQuery } from "./src/interview/MediaQuery";

// const HeadingComponent = () => {
//   return <h1>Namaste react component</h1>;
// };

// function HeadingComponent2() {
//   return (
//     <>
//       <HeadingComponent />
//       Namaste react component 2
//     </>
//   );
// }
// root.render(<FormVAlidationUsingLib />);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ComponentLifecycle/>);
root.render(<MediaQuery/>);


// root.render(<SwiggyLayout />);
root.render(<FormValidation />);

//---------------------------------------------------------------------------------------




















