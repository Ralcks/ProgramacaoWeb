// src/components/Inicio.jsx
import React, { useState } from 'react';
import './Inicio.css'; // Você pode criar um arquivo CSS para estilizar o componente
import Botao from './Botao';

const Inicio = () => {
  const [nome, setNome] = useState('');

  const handleEntrarClick = () => {
    // Lógica para redirecionar para próxima tela com o nome, se necessário
    console.log('Nome:', nome);
  };

  return (
    <div className='inicio'>
      <h1>Bem-vindo à Fototeca</h1>
      <p>A sua plataforma para gerenciar fotos.</p>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <Botao onClick={handleEntrarClick}>Entrar</Botao>
    </div>
  );
};

export default Inicio;
