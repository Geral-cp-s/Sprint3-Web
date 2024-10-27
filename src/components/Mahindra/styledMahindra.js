import styled from 'styled-components';

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

// Novo contêiner para a imagem do carro
export const CarImage = styled.img`
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 60px auto;
  width: 100%;
  max-width: 800px;
  display: block;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5);
  } 
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  transition: transform 0.3s;

  &.fade-in {
    animation: fadeIn 0.3s;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    color: #333;
  }

  p {
    margin: 15px 0 0;
    color: #666;
    line-height: 1.5;
  }

  button {
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #c0392b;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  color: #e74c3c;
  font-size: 24px;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: color 0.3s;

  &:hover {
    color: #c0392b;
  }
`;

export const ModalHeader = styled.h2`
  text-decoration: underline red;
`;

export const ModalImage = styled.img`
  width: 70%;
  border-radius: 10px;
  margin: 0 auto 20px;
  display: block;
`;

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

export const DriverCard = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }

  border: 2px solid transparent;
  transition: border-color 0.3s;

  &:hover {
    border: 2px solid red;
  }
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

export const QuemEContainer = styled.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }
`;

export const DriversContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  & > div {
    flex: 1 1 200px;
    margin: 10px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 2px solid transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5);
    }
  }
`;
