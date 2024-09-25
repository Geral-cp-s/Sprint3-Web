import React, { useState } from 'react';
import { DriverCard, DriverImage, DriverName, DriverNumber, CountryFlag } from './styledMahindra'; 

function EdoardoMortara() {
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
      <DriverCard onClick={openModal}>
        <DriverImage src="../../../public/img/mahindra/edoardo.png" alt="Edoardo Mortara" />
        <DriverName>Edoardo Mortara</DriverName>
        <DriverNumber>48</DriverNumber>
        <p>
          <CountryFlag src="../../../public/img/bandeira/suica.jpg" alt="Bandeira da Suíça" />
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
            <h2>Edoardo Mortara</h2>
            <img src="../../../public/img/mahindra/edoardo.png" alt="Edoardo Mortara" style={modalImageStyles} />
              <h3 className="legenda" style={legendaStyles}>Estatísticas da temporada</h3>
                <div className="pmodal" style={pmodalStyles} >
                  <span >Classificação:</span>
                  <span >21º</span>|
                  <span >Vitórias:</span>
                  <span >0</span>|
                  <span >Pódios:</span>
                  <span >0</span>
                </div>
              <h3 className="legenda" style={legendaStyles}>Dados da carreira</h3>
                <div className="pmodal" style={pmodalStyles}>
                    <span >Corridas que particiou:</span>
                    <span class="value">87</span>|
                    <span >Vitórias:</span>
                    <span >6</span>|
                    <span class="label">Pódios:</span>
                    <span >13</span>|<br/>
                    <span >Pole Position:</span>
                    <span >2</span>
                </div>
                <div  className="pmodal" style={pmodalStyles}>
                    <div><span>Títulos conquistados ------ </span> <span class="dois">0</span></div>
                    <div><span>Pontos no campeonato ------</span> <span class="dois">422</span></div>
                    <div><span>Voltas rápidas ------</span> <span class="dois">2</span></div>
                    <div><span>Voltas lideradas ------</span> <span class="dois">215</span></div>
                </div>
          </div>
        </div>
      )}
    </>
  );
}

// Estilos inline do modal (pode ser movido para o arquivo CSS separado)
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

const legendaStyles = {
  fontWeight: '800',
};

const pmodalStyles = {
  marginTop: '1%',
};

export default EdoardoMortara;
