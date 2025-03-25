import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import SearchBook from "./pages/search";
import Recommendations from "./pages/recommendations";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-[#D4DE95] via-white to-[#BAC095]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;