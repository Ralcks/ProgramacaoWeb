// src/components/Inicio.jsx
import React from 'react';
import './Inicio.css'; // Você pode criar um arquivo CSS para estilizar o componente
import Botao from './Botao';

const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>Bem-vindo à Fototeca</h1>
      <p>A sua plataforma para gerenciar fotos.</p>
      <Botao />
    </div>
  );
};

export default Inicio;
