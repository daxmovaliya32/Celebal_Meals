import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import ShowOrder from "./page/ShowOrder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
     <Routes><Route path="login" element={<Login />} /></Routes>
     <Routes> <Route path="/" element={<App />} /></Routes>
     <Routes><Route path="signup" element={<Signup/>} /></Routes>
     <Routes><Route path="orders" element={<ShowOrder/>} /></Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
