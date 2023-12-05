// src/components/GaleriaFotos.jsx
import React, { useState } from 'react';
import './GaleriaFotos.css';
import BotaoAdicionarFoto from './BotaoAdicionarFoto';

const GaleriaFotos = () => {
  // Estado para armazenar a lista de fotos
  const [fotos, setFotos] = useState([
    { id: 1, url: 'url_da_imagem_1.jpg', descricao: 'Descrição da imagem 1' },
    { id: 2, url: 'url_da_imagem_2.jpg', descricao: 'Descrição da imagem 2' },
    // Adicione mais fotos conforme necessário
  ]);

  // Estados para armazenar as informações da nova foto
  const [novaFotoUrl, setNovaFotoUrl] = useState('');
  const [novaFotoDescricao, setNovaFotoDescricao] = useState('');

  // Função para adicionar uma nova foto
  const adicionarFoto = () => {
    // Verifica se ambos os campos (url e descrição) estão preenchidos
    if (novaFotoUrl.trim() && novaFotoDescricao.trim()) {
      const novaFoto = {
        id: fotos.length + 1,
        url: novaFotoUrl,
        descricao: novaFotoDescricao,
      };

      // Atualiza o estado com a nova foto
      setFotos([...fotos, novaFoto]);

      // Limpa os estados das novas informações
      setNovaFotoUrl('');
      setNovaFotoDescricao('');
    } else {
      // Exibe uma mensagem de erro se algum dos campos estiver vazio
      alert('Por favor, preencha tanto a URL quanto a descrição da nova foto.');
    }
  };

  return (
    <div className='galeria-fotos'>
      <h1>Fototeca</h1>
      <div className='grid-container'>
        {fotos.map((foto) => (
          <div key={foto.id} className='foto-item'>
            <img src={foto.url} alt={foto.descricao} />
            <p>{foto.descricao}</p>
          </div>
        ))}
        <BotaoAdicionarFoto onClick={adicionarFoto} />
      </div>

      {/* Campos para adicionar nova foto */}
      <div className='novo-form'>
        <input
          type='text'
          placeholder='URL da nova foto'
          value={novaFotoUrl}
          onChange={(e) => setNovaFotoUrl(e.target.value)}
        />
        <input
          type='text'
          placeholder='Descrição da nova foto'
          value={novaFotoDescricao}
          onChange={(e) => setNovaFotoDescricao(e.target.value)}
        />
        <button onClick={adicionarFoto}>Adicionar Nova Foto</button>
      </div>
    </div>
  );
};

export default GaleriaFotos;
