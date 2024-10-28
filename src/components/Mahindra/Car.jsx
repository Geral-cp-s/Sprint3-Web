import React, { useState } from 'react';
import { CarImage, ModalContent, CloseButton, ModalImage } from './styledMahindra';

function Car() {
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
      <CarImage src="/img/mahindra/carro.png" alt="Mahindra Car" onClick={openModal} />

      {isModalOpen && (
        <Modal className="modal" onClick={handleClickOutside}>
          <ModalContent className="modal-content">
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalTitle>Informações do carro</ModalTitle>
            <ModalImage src="/public/img/mahindra/carro.png" alt="Mahindra Car" />
            <DetailsContainer>
              <DetailItem>
                <span>Motor:</span>
                <span className="dois">Mahindra M7Electro</span>
              </DetailItem>
              <Separator />
              <DetailItem>
                <span>Chassi:</span>
                <span className="dois">Spark SRT05e</span>
              </DetailItem>
              <Separator />
              <DetailItem>
                <span>Carro da equipe:</span>
                <span className="dois">Mahindra M10Elétrico</span>
              </DetailItem>
              <Separator />
              <DetailItem>
                <span>Peso:</span>
                <span className="dois">900kg</span>
              </DetailItem>
              <Separator />
              <DetailItem>
                <span>Aceleração (0-100 km/h):</span>
                <span className="dois">1,8 segundos</span>
              </DetailItem>
            </DetailsContainer>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default Car;
