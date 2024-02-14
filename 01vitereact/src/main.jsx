import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Shazam() {
  return <h1>hello</h1>;
}

function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute('href', reactElement.props.href);
  // domElement.setAttribute('target', reactElement.props.target);
  // container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.google",
    target: "_blank",
  },
  "click me to visit google"
);
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App/>,
    <App/>,
    
  </>
);
