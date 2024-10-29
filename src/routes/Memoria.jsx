import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import MemoriaCard from '../components/MemoriaCard';

const MemoriaJogo = styled.main`
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Audiowide", sans-serif;

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 150px);
    gap: 10px;
    margin: 20px;
  }

  .card {
    width: 150px;
    height: 150px;
    cursor: pointer;
    perspective: 1000px;
    position: relative;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: rotateY(0deg);
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden; /* Garante que a imagem não ultrapasse o card */
  }

  .card-front img, .card-back img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Mantém a imagem dentro dos limites do card */
  }

  .card-front {
    transform: rotateY(180deg);
  }
`;

const cardImages = [
  { src: '/img/memoria/imagem1.png', matched: false },
  { src: '/img/memoria/imagem2.png', matched: false },
  { src: '/img/memoria/imagem3.png', matched: false },
  { src: '/img/memoria/imagem4.png', matched: false },
  { src: '/img/memoria/imagem5.png', matched: false },
  { src: '/img/memoria/imagem6.png', matched: false },
];

const Memoria = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .map((card) => ({ ...card, id: Math.random() }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (card) => {
    if (disabled || selectedCards.includes(card) || card.matched) return;

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      setDisabled(true);
      checkMatch(newSelectedCards);
    }
  };

  const checkMatch = (newSelectedCards) => {
    const [firstCard, secondCard] = newSelectedCards;

    if (firstCard.src === secondCard.src) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.src === firstCard.src ? { ...card, matched: true } : card
        )
      );
      setScore((prevScore) => prevScore + 1);
      resetSelection();
    } else {
      setTimeout(() => {
        resetSelection();
      }, 1000);
    }
  };

  const resetSelection = () => {
    setSelectedCards([]);
    setDisabled(false);
  };

  return (
    <MemoriaJogo>
      <h1>Jogo da Memória</h1>
      <h2>Pontuação: {score}</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCards.includes(card) || card.matched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={card.src} alt="Card" />
              </div>
              <div className="card-back">
                <MemoriaCard/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MemoriaJogo>
  );
};

export default Memoria;
