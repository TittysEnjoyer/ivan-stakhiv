import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';

import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
