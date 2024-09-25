import React, { useState } from 'react';
import { DriverCard, DriverImage, DriverName, DriverNumber, CountryFlag } from './styledMahindra'; 

function DeVries() {
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
        <DriverImage src="../../../public/img/mahindra/nyckdevries.png" alt="Nick de Vries" />
        <DriverName>Nick de Vries</DriverName>
        <DriverNumber>21</DriverNumber>
        <p>
          <CountryFlag src="../../../public/img/bandeira/holanda.jpg" alt="Bandeira da Holanda" />
          Holanda
        </p>
      </DriverCard>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" style={modalStyles} onClick={handleClickOutside}>
          <div className="modal-content" style={modalContentStyles}>
            <span className="close" style={closeButtonStyles} onClick={closeModal}>
              &times;
            </span>
            <h2>Nick de Vries</h2>
            <img src="../../../public/img/mahindra/nyckdevries.png" alt="Edoardo Mortara" style={modalImageStyles} />
              <h3 className="legenda" style={legendaStyles}>Estatísticas da temporada</h3>
                <div className="pmodal" style={pmodalStyles} >
                  <span >Classificação:</span>
                  <span >22º</span>|
                  <span >Vitórias:</span>
                  <span >0</span>|
                  <span >Pódios:</span>
                  <span >0</span>
                </div>
              <h3 className="legenda" style={legendaStyles}>Dados da carreira</h3>
                <div className="pmodal" style={pmodalStyles}>
                    <span >Corridas que particiou:</span>
                    <span class="value">50</span>|
                    <span >Vitórias:</span>
                    <span >4</span>|
                    <span class="label">Pódios:</span>
                    <span >8</span>|<br/>
                    <span >Pole Position:</span>
                    <span >8</span>
                </div>
                <div  className="pmodal" style={pmodalStyles}>
                    <div><span>Títulos conquistados ------ </span> <span class="dois">1</span></div>
                    <div><span>Pontos no campeonato ------</span> <span class="dois">265</span></div>
                    <div><span>Voltas rápidas ------</span> <span class="dois">3</span></div>
                    <div><span>Voltas lideradas ------</span> <span class="dois">118</span></div>
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

export default DeVries;
