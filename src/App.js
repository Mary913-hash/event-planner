import React from "react";
import NavBar from './components/Navbar/NavBar';
import CarPage from './components/CarPage/CarPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar /> {/* Render Header component at the top */}
        <Routes>
          <Route path="/" element={<CarPage />} />
          <Route path="/brand" element={<div>Brand Page</div>} />
          <Route path="/users" element={<div>Users Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
