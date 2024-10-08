import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-family: "Audiowide", sans-serif;
  font-size: 2.3em;
  margin-bottom: 30px; /* Aumentado para mais espaço abaixo do título */
  color: #2e86de;
  border-bottom: 2px solid #2e86de;
  padding-bottom: 10px;
`;

export const ProblemSection = styled.section`
  margin-bottom: 50px; /* Aumentado para mais espaço entre seções */
  padding: 30px; /* Aumentado para mais espaço interno */
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2em;
    margin-top: 20px;
    color: #e74c3c;
    border-bottom: 1px solid #e74c3c;
    padding-bottom: 5px;
  }
`;

export const PainText = styled.p`
  line-height: 1.6;
  margin-bottom: 20px; /* Aumentado para mais espaço entre parágrafos */
  font-size: 1.1em;
  transition: color 0.3s ease; /* Transição suave de cor */

  &:hover {
    color: #e74c3c; /* Cor ao passar o mouse */
    cursor: pointer; /* Muda o cursor ao passar o mouse */
  }
`;

export const SolutionSection = styled.section`
  margin-bottom: 50px; /* Aumentado para mais espaço entre seções */
  padding: 40px; /* Aumentado para mais espaço interno */
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ol {
    padding-left: 20px;
    margin-top: 20px; /* Adicionado espaço acima da lista */

    li {
      margin-bottom: 15px; /* Aumentado para mais espaço entre itens da lista */
      font-size: 1.1em;
      padding: 10px; /* Adicionado padding interno ao item da lista */

      &:hover {
        color: #2980b9; /* Muda a cor do texto ao passar o mouse */
        cursor: pointer; /* Muda o cursor ao passar o mouse */
      }
    }
  }

  h2 {
    font-size: 2em;
    margin-top: 20px;
    color: #27ae60;
    border-bottom: 1px solid #27ae60;
    padding-bottom: 10px; /* Aumentado para mais espaço abaixo do título */
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px; /* Aumentado para mais espaço entre parágrafos */
    font-size: 1.1em;
    padding: 10px; /* Adicionado padding interno ao parágrafo */
  }
`;


export const BenefitText = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1.1em;
  transition: color 0.3s ease; /* Transição suave de cor */

  &:hover {
    color: #27ae60; /* Cor ao passar o mouse */
    cursor: pointer; /* Muda o cursor ao passar o mouse */
  }
`;

export const FinalParagraph = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  margin-top: 30px; /* Aumentado para mais espaço acima do parágrafo final */
  padding: 15px; /* Aumentado para mais espaço interno */
  border: 2px solid #27ae60;
  border-radius: 8px;
  background-color: #e8f5e9; /* Fundo verde claro */
`;

// Estilizações adicionais
export const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
`;

export const FeedbackSection = styled(SolutionSection)`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FeedbackTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1em;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #219653;
  }
`;

export const CallToAction = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 1.2em;
  font-weight: bold;
  color: #444;
`;
