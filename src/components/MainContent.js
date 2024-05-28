import React, { useState } from 'react';
import './MainContent.css';
import Modal from './Modal';

const MainContent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const closeModal = () => {
    setActiveCard(null);
  };

  const cardContent = [
    {
      title: 'O E-Book que pode mudar o jogo',
      description: 'Como criar ter um perfil de Sucesso Com as mulheres',
      details: 'Aprenda a criar um perfil atrativo e otimizado para atrair mulheres.',
    },
    {
      title: 'Você pode ter o dominio que deseja',
      description: 'Conteúdo que Conecta e Engaja de Verdade',
      details: 'Descubra como atarir mais mulheres',
    },
    {
      title: 'A sedução muda o jeito com que você se relaciona e aumenta sua autoestima',
      description: 'Transformando você e seu mindset',
      details: 'Saiba como ser desejado por todas.',
    },
  ];

  return (
    <section className="main-content">
      <h2>Veja o que você aprenderá:</h2>
      <div className="content-cards">
        {cardContent.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="cta-button" onClick={() => toggleCard(index)}>Clique e Saiba Mais</button>
          </div>
        ))}
      </div>
      {activeCard !== null && (
        <Modal
          isOpen={activeCard !== null}
          onClose={closeModal}
          title={cardContent[activeCard].title}
          content={cardContent[activeCard].details}
        />
      )}
    </section>
  );
};

export default MainContent;
