import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About"
import Programs from "./components/Programs"
import Enroll from "./components/Enroll"
import ErrorPage from "./components/ErrorPage"



const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      error: <ErrorPage/>,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/programs",
          element: <Programs />
        },
        {
          path: "/enroll",
          element: <Enroll />
        }
      ]
  }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);

reportWebVitals();
