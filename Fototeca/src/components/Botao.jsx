// src/components/Botao.jsx
import React from 'react';
import './botao.css';

const Botao = ({ onClick }) => {
  return (
    <button className='botao' onClick={onClick}>
      Entrar
    </button>
  );
};

export default Botao;
