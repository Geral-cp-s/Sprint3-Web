import styled from 'styled-components';

// Container para a lista de cards
export const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
  margin: 20px;
  
`;

// Estilização do Card
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  width: 300px; 
  height: 400px; 
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: rgb(245, 245, 245);
  

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  // Ajustes para telas menores
  @media (max-width: 768px) {
    width: 45%; 
    height: 350px; 
  }

  @media (max-width: 480px) {
    width: 90%; 
    height: auto; 
  }
`;

// Seção que contém as informações das vitórias, pódios e corridas
export const DateSection = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 15px;

  .metric-label {
    font-weight: bold; 
    font-size: 16px; 
    color: #6c757d; // Cor para as labels
  }

  .metric-value {
    font-size: 22px; // Aumenta o tamanho dos valores
    font-weight: bold; // Negrito para dar mais destaque
    color: #2c3e50; 
  }

  // Responsividade
  @media (max-width: 480px) {
    flex-direction: column; 
    align-items: flex-start; 
    gap: 5px; 
  }
`;

// Seção de detalhes, incluindo o nome da equipe e a bandeira
export const DetailsSection = styled.div`
  margin-bottom: 15px;
`;

// Seção para o nome e logo da equipe
export const TeamFlagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;  
  margin-bottom: 10px;  

  img {
    width: 60px;
    height: auto;
    margin-bottom: 10px;  
  }

  span {
    font-size: 1.2rem; // Aumenta o tamanho do texto do nome
    font-weight: bold;
    color: #333;
    text-align: center;  
  }
`;

// Seção da imagem do carro
export const ImageSection = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
