import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout/>}>

      {/* <Route path="/" element={<Home/>}/> */}

      <h1>Hola recetas</h1>
      </Route>
      </Routes>

    </div>
  );
}

export default App;
