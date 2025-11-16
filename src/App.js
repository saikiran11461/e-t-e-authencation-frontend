
import React from 'react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
