import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Home from './pages/Home';
import Experience from './pages/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
