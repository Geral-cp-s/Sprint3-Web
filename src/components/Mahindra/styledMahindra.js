import styled from 'styled-components';

// Estilos genéricos usados em diversos componentes
export const TeamInfoContainer = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin-top: 6%;
`;

export const Logo = styled.img`
  margin-top: 15px;
  width: 40%;
`;

export const Bandeira = styled.img`
  width: 20px;
`;

export const CarImage = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 20px auto;
`;

export const ModalContainer = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  text-align: left;
`;

export const CloseButton = styled.button`
  background: red;
  color: white;
  font-size: 24px;
`;

export const ModalHeader = styled.h2`
  text-decoration: underline red;
`;

export const ModalImage = styled.img`
  width: 180px;
`;

// Estilos para estatísticas
export const StatisticsContainer = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const StatisticsHeading = styled.h2`
  color: black;
  text-decoration: underline red;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StatBox = styled.div`
  background: #f9f9f9;
  padding: 20px;
  text-align: center;
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  min-width: 120px;
`;

// Estilos para pilotos
export const DriverCard = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
`;

export const DriverImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
`;

export const DriverName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

export const DriverNumber = styled.div`
  font-size: 24px;
  color: red;
  font-weight: 700;
`;

export const CountryFlag = styled.img`
  width: 35px;
  margin-right: 5px;
`;

// Estilos para "Quem É"
export const QuemEContainer = styled.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
  text-align: center;

`;

// Adicione isso ao styles.js
export const DriversContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Espaço igual entre os pilotos */
  flex-wrap: wrap; /* Permite que os pilotos se movam para a próxima linha em telas menores */
  margin-top: 20px; /* Margem superior */
`;