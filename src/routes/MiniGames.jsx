import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Estilização dos componentes
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh; // Garante que o container ocupe a altura total da tela
`;

const Title = styled.h1`
  margin-bottom: 100px;
  font-family: "Audiowide", sans-serif;
  padding-top: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  flex-grow: 1; // Faz o CardContainer ocupar o espaço restante
`;

const Card = styled(Link)`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 320px; // Aumentando a largura
  height: 400px; // Aumentando a altura
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Para distribuir conteúdo e imagem

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center;
  flex-grow: 1; 
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  font-family: "Audiowide", sans-serif;
  text-decoration: none;
  color: black;
`;

const GameImage = styled.img`
  width: 100%; // Imagem ocupa toda a largura do Card
  height: auto; // Mantém a proporção da imagem
  border-radius: 8px; // Para bordas arredondadas
`;



// Componente principal
const MiniGames = () => {
  const games = [
    { title: 'Jogo da memoria', link: '/memoria', img: '/img/jogos/jogo-da-memoria-para-imprimir-1000x525.png' }, 
    { title: 'Corrida de linhas', link: '/desenho', img: '/img/jogos/0,,20559277-FMM,00.png' },
    { title: 'Corrida Maluca', link: '/corrida', img: '/img/jogos/image.png' },
  ];

  return (
    <Container>
      <Title>Mini Games</Title>
      <CardContainer>
        {games.map((game, index) => (
          <Card key={index} to={game.link}>
            <GameImage src={game.img} alt={game.title} />
            <CardContent>
              <CardTitle>{game.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default MiniGames;
