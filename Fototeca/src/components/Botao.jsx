import React from 'react';
import { useNavigate } from 'react-router-dom';
import './botao.css';

const Botao = () => {
  const navigate = useNavigate();

  const handleEntrarClick = () => {
    // Adicione lógica adicional, se necessário
    // Exemplo: enviar dados para a próxima tela antes de redirecionar

    // Redireciona para a rota '/galeria-fotos'
    navigate('/galeria-fotos');
  };

  return (
    <button className='botao' onClick={handleEntrarClick}>
      Entrar
    </button>
  );
};

export default Botao;
