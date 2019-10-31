import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
