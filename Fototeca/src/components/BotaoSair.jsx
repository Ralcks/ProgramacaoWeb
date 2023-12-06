// src/components/BotaoSair.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotaoSair.css';

const BotaoSair = () => {
  const navigate = useNavigate();

  const handleSairClick = () => {
    // Lógica para sair (pode ser redirecionar para a tela inicial, por exemplo)
    navigate('/');
  };

  return (
    <button className='botao-sair' onClick={handleSairClick}>
      Sair
    </button>
  );
};

export default BotaoSair;
