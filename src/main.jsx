// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "@/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // Import BrowserRouter
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
)