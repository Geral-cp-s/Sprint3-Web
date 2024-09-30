import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 500px; /* Aumenta a largura do card */
  padding: 30px; /* Aumenta o preenchimento interno */
  background-color: #f4f4f4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const CardImage = styled.img`
  width: 100%; /* Define a largura da imagem como 100% do card */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 8px; /* Arredonda as bordas da imagem */
`;

export const CardTitle = styled.h2`
  font-size: 26px; /* Aumenta o tamanho da fonte do título */
  color: #d32f2f;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
  margin: 15px 0; /* Adiciona margem entre o título e o conteúdo */
`;

export const CardContent = styled.p`
  font-size: 18px; /* Aumenta o tamanho da fonte do conteúdo */
  color: #666;
  text-align: center;
  margin: 15px 0; /* Adiciona margem entre o conteúdo e o botão */
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px; /* Aumenta o tamanho do botão */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s; /* Adiciona uma transição suave na cor de fundo */

  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;
