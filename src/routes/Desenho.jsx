import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilização dos componentes
const Container = styled.div`
  h1{
    padding-bottom: 30px;
    font-family: "Audiowide", sans-serif;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Canvas = styled.canvas`
  border: 2px solid #333;
  cursor: crosshair;
`;

const StartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

// Componente principal
const Desenho = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [linePath, setLinePath] = useState([]);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 180 });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [lapCount, setLapCount] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [isCrashed, setIsCrashed] = useState(false);

  // Configuração do canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
    canvas.width = 800;
    canvas.height = 400;

    // Limpa o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    if (isGameStarted) return; // Não permite desenhar após o início do jogo
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setLinePath([{ x: offsetX, y: offsetY }]); // Inicia o caminho
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    setLinePath((prev) => [...prev, { x: offsetX, y: offsetY }]); // Atualiza o caminho
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    ctx.closePath();
  };

  const startGame = () => {
    setIsGameStarted(true);
    setIsCrashed(false);
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setLapCount(0);
    setObstacles([]);
    setCarPosition({ x: 0, y: 180 });

    // Adiciona obstáculos aleatórios
    const newObstacles = Array.from({ length: 5 }, () => ({
      x: Math.random() * 750, // Garante que o obstáculo caiba no canvas
      y: Math.random() * 350, // Garante que o obstáculo caiba no canvas
      width: 50,
      height: 50,
    }));
    setObstacles(newObstacles);
  };

  // Movimento do carro
  useEffect(() => {
    if (isGameStarted && !isCrashed) {
      const interval = setInterval(() => {
        setCarPosition((prev) => {
          const newX = prev.x + 2; // Velocidade do carro
          const newY = followLine(newX); // Posição Y seguindo a linha

          // Verifica se o carro cruzou a linha de partida
          if (newX > canvasRef.current.width) {
            setLapCount((prev) => prev + 1); // Aumenta a contagem de voltas
            return { x: 0, y: 180 }; // Reseta a posição do carro
          }

          // Verifica se o carro colidiu com algum obstáculo
          for (const obstacle of obstacles) {
            if (
              newX < obstacle.x + obstacle.width &&
              newX + 30 > obstacle.x && // Ajuste na largura do carro
              newY < obstacle.y + obstacle.height &&
              newY + 60 > obstacle.y // Ajuste na altura do carro
            ) {
              setIsCrashed(true); // Define que houve uma colisão
              alert('Você colidiu com um obstáculo!');
              return { x: prev.x, y: prev.y }; // Para o carro na posição anterior
            }
          }

          return { x: newX, y: newY }; // Atualiza a posição do carro
        });
      }, 20); // Atualiza a posição a cada 20ms
      return () => clearInterval(interval);
    }
  }, [isGameStarted, obstacles, isCrashed]);

  // Desenha o fundo e obstáculos
  useEffect(() => {
    if (ctx) {
      // Desenha o fundo
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Desenha os obstáculos
      ctx.fillStyle = 'red';
      for (const obstacle of obstacles) {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      }

      // Desenha a linha desenhada
      ctx.beginPath();
      if (linePath.length > 0) {
        ctx.moveTo(linePath[0]?.x, linePath[0]?.y);
        for (let i = 1; i < linePath.length; i++) {
          ctx.lineTo(linePath[i].x, linePath[i].y);
        }
      }
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Desenha a contagem de voltas
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText(`Voltas: ${lapCount}`, 10, 30);

      // Desenha o carro na nova posição
      const carImage = document.getElementById('carImage');
      ctx.drawImage(carImage, carPosition.x, carPosition.y, 30, 60); // Tamanho reduzido para 30x60
    }
  }, [linePath, carPosition, obstacles, lapCount, ctx]);

  // Função para fazer o carro seguir a linha
  const followLine = (newX) => {
    if (linePath.length < 2) return carPosition.y; // Se não há linha, mantém a Y fixa

    // Encontra a posição Y mais próxima da linha
    let closestY = linePath[0].y;
    let minDistance = Infinity;

    linePath.forEach(({ x, y }) => {
      const distance = Math.abs(newX - x);
      if (distance < minDistance) {
        minDistance = distance;
        closestY = y;
      }
    });

    return closestY; // Retorna a posição Y mais próxima
  };

  // Função para reiniciar o jogo
  const resetGame = () => {
    setIsGameStarted(false);
    setIsCrashed(false);
    setLapCount(0);
    setLinePath([]);
    setCarPosition({ x: 0, y: 180 });
    setObstacles([]);
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <Container>
      <h1>Corrida de Linhas</h1> {/* Título do jogo */}
      <Canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />
      <img
        id="carImage"
        src="public/img/image.png" 
        alt="Car"
        style={{ display: 'none' }} 
      />
      <StartButton onClick={isGameStarted ? resetGame : startGame}>
        {isGameStarted ? 'Reiniciar Jogo' : 'Começar Jogo'}
      </StartButton>
    </Container>
  );
};

export default Desenho;
