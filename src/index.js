import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Group from "./Group";
import { PermissionProvider } from "./Hooks";
import { render } from "react-dom";

const items = ["item", "sdsds", "aaa"];
const objetos = [
  { item: "sdsd", id: 1 },
  { item: "sdsd", id: 2 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PermissionProvider>
    <Group></Group>
  </PermissionProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
