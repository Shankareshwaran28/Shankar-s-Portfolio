import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

// runtime favicon: import the project PNG from src so we can set it at runtime
import skIcon from "./assests/sk.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// set favicon and apple-touch-icon at runtime to use imported `sk.png`
const setFavIcons = (iconHref) => {
  const head = document.getElementsByTagName("head")[0];

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    head.appendChild(link);
  }
  link.href = iconHref;

  let apple = document.querySelector("link[rel='apple-touch-icon']");
  if (!apple) {
    apple = document.createElement("link");
    apple.rel = "apple-touch-icon";
    head.appendChild(apple);
  }
  apple.href = iconHref;
};

setFavIcons(skIcon);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
