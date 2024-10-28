// src/components/ComparativoStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Roboto", system-ui;
  padding: 30px;
  margin: 10px;
  background: #f3f4f6; /* Fundo suave */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;

export const Title = styled.h1`
  font-family: "Audiowide", sans-serif;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem; /* Tamanho maior para destaque */
  text-transform: uppercase; /* Letras maiúsculas */
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  text-align: justify; /* Justificação do texto */
`;

export const Section = styled.section`
  margin: 30px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: #fff; /* Fundo branco para se destacar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;

export const TeamDetails = styled.div`
  margin: 10px 0;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none; /* Remove border from the last item */
  }
`;

export const Subtitle = styled.h2`
  font-family: "Audiowide", sans-serif;
  color: #007BFF; /* Azul da Fórmula E */
  margin-top: 20px;
  text-align: center; /* Centraliza o subtítulo */
  font-size: 1.8rem; /* Aumenta o tamanho do subtítulo */
`;

export const Subheading = styled.h3`
  font-family: "Audiowide", sans-serif;
  color: #444;
  margin-top: 15px;
`;

export const Formula1Text = styled.span`
  color: #ff3333; /* Vermelho vibrante */
  font-weight: bold; /* Negrito para Fórmula 1 */
  font-size: 1.1rem; /* Tamanho um pouco maior */
`;

export const FormulaEText = styled.span`
  color: #1E90FF; /* Azul elétrico */
  font-weight: bold; /* Negrito para Fórmula E */
  font-size: 1.1rem; /* Tamanho um pouco maior */
`;

export const ConclusionSection = styled.section`
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  color: #333;
  background: #f9f9f9; /* Fundo suave */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;
