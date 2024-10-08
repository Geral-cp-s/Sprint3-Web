import Cards from '../components/Equipes/Cards'; // Importando o componente Cards
import styled from 'styled-components';


const PageTitle = styled.h1`
    font-size: 1.7; /* Tamanho da fonte */
    color: #1a252f; /* Cor do texto um pouco mais escura */
    text-align: center; /* Centraliza o título */
    margin: 30px 0; /* Espaçamento em cima e embaixo */
    font-weight: bold; /* Negrito */
    text-transform: uppercase; /* Transformação do texto para maiúsculas */
    letter-spacing: 1px; /* Espaçamento entre as letras */
    text-decoration: underline; /* Adiciona sublinhado */
    font-family: "Audiowide", sans-serif;
    text-decoration-color: red; /* Cor do sublinhado */
`;

const MainTitle = styled.h1`
  background-color: lightgray;

`


const Equipes = () => {
  return (
    <MainTitle>
      <PageTitle>Equipes da Formula E</PageTitle>
      <Cards /> {/* Renderizando os cards */}
    </MainTitle>
  );
};

export default Equipes;
