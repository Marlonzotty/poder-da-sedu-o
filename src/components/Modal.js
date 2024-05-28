import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="cta-button" onClick={onClose}>Fechar</button>
        <button className="cta-button">Comprar Agora</button>
      </div>
    </div>
  );
};

export default Modal;
