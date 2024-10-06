import React, { useState } from 'react';
import { CarImage } from './styledMahindra';

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
            <h2 style={modalTitleStyles}>Informações do carro</h2>
            <img src="../../../public/img/mahindra/carro.png" alt="Mahindra Car" style={modalImageStyles} />
            <div style={detailsContainerStyles}>
              <div style={detailItemStyles}>
                <span>Motor:</span>
                <span className="dois">Mahindra M7Electro</span>
              </div>
              <div style={separatorStyle}></div>
              <div style={detailItemStyles}>
                <span>Chassi:</span>
                <span className="dois">Spark SRT05e</span>
              </div>
              <div style={separatorStyle}></div>
              <div style={detailItemStyles}>
                <span>Carro da equipe:</span>
                <span className="dois">Mahindra M10Elétrico</span>
              </div>
              <div style={separatorStyle}></div>
              <div style={detailItemStyles}>
                <span>Peso:</span>
                <span className="dois">900kg</span>
              </div>
              <div style={separatorStyle}></div>
              <div style={detailItemStyles}>
                <span>Aceleração (0-100 km/h):</span>
                <span className="dois">1,8 segundos</span>
              </div>
            </div>
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  paddingTop: '60px',
};

const modalContentStyles = {
  backgroundColor: '#f9f9f9',
  margin: '5% auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  width: '70%',
  maxWidth: '500px',
  textAlign: 'center',
  animation: 'fadeIn 0.5s',
};

const closeButtonStyles = {
  color: '#e74c3c',
  float: 'right',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const modalTitleStyles = {
  fontSize: '24px',
  margin: '10px 0',
  color: '#333',
};

const modalImageStyles = {
  width: '70%',
  borderRadius: '10px',
  marginBottom: '20px',
};

const detailsContainerStyles = {
  textAlign: 'left',
  marginTop: '20px',
};

const detailItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',
  fontSize: '16px',
  color: '#333',
};

const separatorStyle = {
  height: '1px',
  backgroundColor: '#ccc',
  margin: '10px 0', // Espaçamento em relação aos itens acima e abaixo
};

export default Car;
