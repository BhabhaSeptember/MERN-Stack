import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

// import reportWebVitals from './reportWebVitals';


//BrowserRouter enables client-side routing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter> 
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
