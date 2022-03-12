import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Home from './pages/Home';
import Application from './components/gradient';

function App() {
  return (
    <Router>
      <Application />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
