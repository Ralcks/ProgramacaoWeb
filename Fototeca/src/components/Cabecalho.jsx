// Cabecalho.jsx
import React from 'react';

const Cabecalho = ({ nome }) => {
  return (
    <header>
      <h1>Bem-vindo à Fototeca, {nome}!</h1>
    </header>
  );
};

export default Cabecalho;
