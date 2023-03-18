import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="*" element={<h1>Error 404 page not found</h1>} />
    </Routes>
  );
};

export default App;
