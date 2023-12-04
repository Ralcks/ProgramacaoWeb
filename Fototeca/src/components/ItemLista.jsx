// Importe as dependências necessárias do React
import React from 'react';
import ReactDOM from 'react-dom';

// Componente principal
function App() {
    return (
        <section className="fototeca-grid">
            <div className="foto-item">
                <img src="caminho/para/imagem1.jpg" alt="Descrição da Imagem 1" />
            </div>

            <div className="foto-item">
                <img src="caminho/para/imagem2.jpg" alt="Descrição da Imagem 2" />
            </div>

            <div className="foto-item">
                <img src="caminho/para/imagem3.jpg" alt="Descrição da Imagem 3" />
            </div>

        </section>
    );
}

export default ListaItem;