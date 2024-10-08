// src/components/ComparativoStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Roboto", system-ui;
  padding: 20px;
  margin: 10px;
`;

export const Title = styled.h1`
  font-family: "Audiowide", sans-serif;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  margin: 30px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
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
  color: #007BFF;
  margin-top: 20px;
`;

export const Subheading = styled.h3`
  font-family: "Audiowide", sans-serif;
  color: #444;
  margin-top: 15px;
`;

export const Formula1Text = styled.span`
  color: red; /* Cor vermelha para texto da Fórmula 1 */
  font-weight: bold; /* Negrito para Fórmula 1 */
`;

export const FormulaEText = styled.span`
  font-weight: bold; /* Negrito para Fórmula E */
`;

export const ConclusionSection = styled.section`
  margin-top: 40px;
  text-align: center;
`;
