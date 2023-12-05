// src/Rotas.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import GaleriaFotos from './components/GaleriaFotos';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria-fotos" element={<GaleriaFotos />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
