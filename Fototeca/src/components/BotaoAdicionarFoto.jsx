// src/components/BotaoAdicionarFoto.jsx
import React from 'react';
import './BotaoAdicionarFoto.css';

const BotaoAdicionarFoto = ({ onClick }) => {
  return (
    <div className='botao-adicionar-foto' onClick={onClick}>
      <span>+</span>
      <p>Adicionar Foto</p>
    </div>
  );
};

export default BotaoAdicionarFoto;
