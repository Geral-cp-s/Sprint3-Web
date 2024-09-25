import React, { useState } from 'react';
import { CarImage } from './styledMahindra'; // Suponho que esteja usando esses componentes estilizados

function Car() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fechar o modal se clicar fora dele
  const handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <>
      <CarImage src="../../../public/img/mahindra/carro.png" alt="Mahindra Car" onClick={openModal} />
      
      {/* Modal */}
      {isModalOpen && (
        <div className="modal" style={modalStyles} onClick={handleClickOutside}>
          <div className="modal-content" style={modalContentStyles}>
            <span className="close" style={closeButtonStyles} onClick={closeModal}>
              &times;
            </span>
            <h2>Informações do carro</h2>
            <img src="../../../public/img/mahindra/carro.png" alt="Mahindra Car" style={modalImageStyles} />
              <div class="detail"><span>Motor ------ </span> <span class="dois">Mahindra M7Electro</span></div>
              <div class="detail"><span>Chassi ------</span> <span class="dois">Spark SRT05e</span></div>
              <div class="detail"><span>Carro da equipe ------</span> <span class="dois">Mahindra M10Elétrico</span></div>
              <div class="detail"><span>Peso ------</span> <span class="dois">900kg</span></div>
              <div class="detail"><span>Aceleração (0-100 km/h) ------</span> <span class="dois">0,8 segundos</span></div>
          </div>
        </div>
      )}
    </>
  );
}

// Estilos inline (ou você pode mover para o arquivo CSS separado)
const modalStyles = {
  display: 'block',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  paddingTop: '60px',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  margin: '5% auto',
  padding: '20px',
  border: '1px solid #888',
  width: '80%',
  maxWidth: '600px',
  borderRadius: '10px',
  textAlign: 'center',
};

const closeButtonStyles = {
  color: '#aaa',
  float: 'right',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const modalImageStyles = {
  width: '85%',
  borderRadius: '5%',
};

export default Car;
