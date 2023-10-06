import React from 'react';
import './App.css';
import Body from './Body';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="header-title">Virtual Garden</h1>
      </div>
      <Body />
      <div className="footer">
        &copy; 2023 Virtual Garden App
      </div>
    </div>
  );
}

export default App;
