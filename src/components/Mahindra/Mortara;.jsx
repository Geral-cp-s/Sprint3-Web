import React, { useState } from 'react';
import { DriverCard, DriverImage, DriverName, DriverNumber, CountryFlag } from './styledMahindra';

function EdoardoMortara() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <>
      <DriverCard onClick={openModal}>
        <DriverImage src="/img/mahindra/edoardo.png" alt="Edoardo Mortara" />
        <DriverName>Edoardo Mortara</DriverName>
        <DriverNumber>48</DriverNumber>
        <p>
          <CountryFlag src="/img/bandeira/suica.jpg" alt="Bandeira da Suíça" />
          Suíça
        </p>
      </DriverCard>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" style={modalStyles} onClick={handleClickOutside}>
          <div className="modal-content" style={modalContentStyles}>
            <span className="close" style={closeButtonStyles} onClick={closeModal}>
              &times;
            </span>
            <h2 style={modalTitleStyles}>Edoardo Mortara</h2>
            <img src="../../../img/mahindra/edoardo.png" alt="Edoardo Mortara" style={modalImageStyles} />
            <h3 style={legendaStyles}>Estatísticas da temporada</h3>
            <div style={statsContainerStyles}>
              <div style={statItemStyles}>
                <span>Classificação:</span>
                <span>21º</span>
              </div>
              <div style={statItemStyles}>
                <span>Vitórias:</span>
                <span>0</span>
              </div>
              <div style={statItemStyles}>
                <span>Pódios:</span>
                <span>0</span>
              </div>
            </div>
            <hr style={separatorStyles} /> {/* Linha separadora */}
            <h3 style={legendaStyles}>Dados da carreira</h3>
            <div style={careerDataContainerStyles}>
              <div style={careerDataItemStyles}>
                <span>Participações em corridas:</span>
                <span className="value">87</span>
              </div>
              <div style={careerDataItemStyles}>
                <span>Vitórias:</span>
                <span>6</span>
              </div>
              <div style={careerDataItemStyles}>
                <span>Pódios:</span>
                <span>13</span>
              </div>
              <div style={careerDataItemStyles}>
                <span>Pole Position:</span>
                <span>2</span>
              </div>
            </div>
            <div style={careerStatsContainerStyles}>
              <div style={careerStatItemStyles}>
                <span>Títulos conquistados:</span>
                <span className="dois">0</span>
              </div>
              <div style={careerStatItemStyles}>
                <span>Pontos no campeonato:</span>
                <span className="dois">422</span>
              </div>
              <div style={careerStatItemStyles}>
                <span>Voltas rápidas:</span>
                <span className="dois">2</span>
              </div>
              <div style={careerStatItemStyles}>
                <span>Voltas lideradas:</span>
                <span className="dois">215</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Estilos responsivos do modal
const modalStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  paddingTop: '10px',
  paddingBottom: '10px',
};

const modalContentStyles = {
  backgroundColor: '#f9f9f9',
  margin: '5% auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  width: '90%',
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
  display: 'block',
  margin: '0 auto',
};

const legendaStyles = {
  fontWeight: '800',
  margin: '20px 0 10px',
  color: '#444',
};

const statsContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const statItemStyles = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#555',
  width: '100%',
  padding: '5px 0',
};

const careerDataContainerStyles = {
  margin: '20px 0',
  textAlign: 'left',
  width: '100%',
};

const careerDataItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 0',
  fontSize: '16px',
  color: '#333',
};

const careerStatsContainerStyles = {
  margin: '20px 0',
  textAlign: 'left',
  width: '100%',
};

const careerStatItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 0',
  fontSize: '16px',
  color: '#333',
};

const separatorStyles = {
  border: '0',
  borderTop: '1px solid #ccc',
  margin: '20px 0',
};

export default EdoardoMortara;
