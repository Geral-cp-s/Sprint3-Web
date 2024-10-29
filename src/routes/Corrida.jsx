import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Corrida = () => {
  const [position, setPosition] = useState({ x: 175, y: 10 });
  const [opponents, setOpponents] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxOpponents = 5;
  const playerWidth = 30;
  const playerHeight = 50;
  const opponentWidth = 50;
  const opponentHeight = 80;

  // Estilização dos componentes
  const GameContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 600px;
    background: #2b2b2b;
    border: 2px solid #fff;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  `;

  const Road = styled.div`
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      #444 0%,
      #444 45%,
      #666 50%,
      #444 55%,
      #444 100%
    );
    background-size: 100% 40px;
    animation: roadAnimation 1s linear infinite;
    position: absolute;
    top: 0;
    left: 0;

    @keyframes roadAnimation {
      from {
        background-position-y: 0;
      }
      to {
        background-position-y: 40px;
      }
    }
  `;

  const PlayerCar = styled.div`
    width: ${playerWidth}px;
    height: ${playerHeight}px;
    background: url('/img/carrocima.png');
    background-size: ${playerWidth}px ${playerHeight}px;
    position: absolute;
    bottom: ${position.y}px;
    left: ${position.x}px;
    transition: left 0.1s, bottom 0.1s;
    border-radius: 5px;
  `;

  const OpponentCar = styled.div`
    width: ${opponentWidth}px;
    height: ${opponentHeight}px;
    background: blue;
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    border-radius: 5px;
  `;

  const Score = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 24px;
  `;

  const GameOverMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    font-weight: bold;
  `;

  const Title = styled.h1`
    text-align: center;
    color: black;
    font-size: 32px;
    margin-top: 20px;
    font-family: "Audiowide", sans-serif;
  `;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && position.x > 0) {
        setPosition((prev) => ({ ...prev, x: prev.x - 25 }));
      } else if (e.key === 'ArrowRight' && position.x < 350) {
        setPosition((prev) => ({ ...prev, x: prev.x + 25 }));
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position]);

  useEffect(() => {
    if (gameOver) return;

    const gameInterval = setInterval(() => {
      setScore((prevScore) => prevScore + 1);

      if (opponents.length < maxOpponents && Math.random() < 0.1) {
        setOpponents((prevOpponents) => [
          ...prevOpponents,
          { top: -100, left: Math.floor(Math.random() * (400 - opponentWidth)) },
        ]);
      }

      setOpponents((prevOpponents) =>
        prevOpponents
          .map((opponent) => ({ ...opponent, top: opponent.top + 15 }))
          .filter((opponent) => opponent.top < 600)
      );

      opponents.forEach((opponent) => {
        const playerLeft = position.x;
        const playerRight = position.x + playerWidth;
        const playerTop = 600 - playerHeight - position.y; // Player bottom position in container
        const playerBottom = playerTop + playerHeight;

        const opponentLeft = opponent.left;
        const opponentRight = opponent.left + opponentWidth;
        const opponentTop = opponent.top;
        const opponentBottom = opponent.top + opponentHeight;

        if (
          playerRight > opponentLeft &&
          playerLeft < opponentRight &&
          playerBottom > opponentTop &&
          playerTop < opponentBottom
        ) {
          setGameOver(true);
          clearInterval(gameInterval);
        }
      });
    }, 100);

    return () => clearInterval(gameInterval);
  }, [opponents, position, gameOver]);

  return (
    <>
      <Title>Corrida Maluca</Title>
      <GameContainer>
        <Road />
        <Score>Pontuação: {score}</Score>
        <PlayerCar />
        {opponents.map((opponent, index) => (
          <OpponentCar key={index} top={opponent.top} left={opponent.left} />
        ))}
        {gameOver && <GameOverMessage>Game Over!</GameOverMessage>}
      </GameContainer>
    </>
  );
};

export default Corrida;
