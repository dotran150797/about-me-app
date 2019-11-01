import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
