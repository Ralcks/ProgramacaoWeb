// src/components/GaleriaFotos.jsx
import React, { useState } from 'react';
import './GaleriaFotos.css';
import BotaoAdicionarFoto from './BotaoAdicionarFoto';

const GaleriaFotos = () => {
  // Estado para armazenar a lista de fotos
  const [fotos, setFotos] = useState([
    { id: 1, url: 'https://github.com/Ralcks/ProgramacaoWeb/blob/Criar-Rotas/Fototeca/src/assets/Imagem/Arvore-pordosol.jpeg?raw=true', descricao: 'Arvore no por-do-sol' },
    { id: 2, url: 'data:image/jpeg;base64,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', descricao: 'Programação' },
    { id: 3, url: 'https://www.freecodecamp.org/news/content/images/2022/03/photo-1619410283995-43d9134e7656.jpeg', descricao: 'React' },
    { id: 4, url: 'data:image/png;base64,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', descricao: 'JavaScript' },
    { id: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUD16UxY5Lv9fW_ctGTeGWFfUFSx3v_Wy1J08J1zsryMz5Jzr2ROLZoM8wJ9KcO0_Aq8&usqp=CAU', descricao: 'Carro' },
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
