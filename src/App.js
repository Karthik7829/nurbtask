
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Rout } from  './components/rout';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Rout/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
