import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"
import { Global } from "./styles/global.js";
import { LoginProvider } from "./context/LoginContext/LoginContext";
import { PostProvider } from "./context/PostContext/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <BrowserRouter>
      <LoginProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
