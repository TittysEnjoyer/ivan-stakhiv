import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';

import HomePage from "./pages/home";
import CreatePostPage from "./pages/create-post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-posts" element={<CreatePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
