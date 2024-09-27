import styled from 'styled-components';

// Estilos genéricos usados em diversos componentes
export const TeamInfoContainer = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin-top: 6%;
`;

export const Logo = styled.img`
  margin-top: 15px;
  width: 40%;
`;

export const Bandeira = styled.img`
  width: 20px;
`;

// Novo contêiner para a imagem do carro
export const CarContainer = styled.div`
  background: white; /* Fundo branco */
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  text-align: center; /* Centraliza o conteúdo */
  margin: 20px auto; /* Margem automática para centralização */
`;

export const CarImage = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto; /* Remove a margem superior e inferior */
`;

export const ModalContainer = styled.div`
  display: flex; /* Altera para flex para centralizar o conteúdo */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  position: fixed; /* Fixa o modal na tela */
  top: 0; /* Posiciona no topo da tela */
  left: 0; /* Posiciona à esquerda */
  right: 0; /* Estende até a direita */
  bottom: 0; /* Estende até o fundo */
  background: rgba(0, 0, 0, 0.8); /* Fundo escuro com opacidade */
  padding: 20px; /* Espaçamento interno */
  z-index: 1000; /* Garante que o modal fique acima de outros elementos */
`;

export const ModalContent = styled.div`
  background: white; /* Fundo branco para o conteúdo do modal */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para profundidade */
  max-width: 500px; /* Largura máxima do modal */
  width: 100%; /* Largura responsiva */
  transition: transform 0.3s; /* Transição suave para animação */

  /* Efeito de entrada */
  &.fade-in {
    animation: fadeIn 0.3s; /* Animação de entrada */
  }

  /* Estilos para cabeçalho do modal */
  h2 {
    margin: 0; /* Remove margem padrão */
    font-size: 20px; /* Tamanho da fonte do título */
    color: #333; /* Cor do texto */
  }

  /* Estilos para conteúdo do modal */
  p {
    margin: 15px 0 0; /* Espaçamento entre parágrafos */
    color: #666; /* Cor do texto */
    line-height: 1.5; /* Espaçamento entre linhas */
  }

  /* Estilos para botão de fechamento */
  button {
    background: #e74c3c; /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    border: none; /* Remove borda padrão */
    border-radius: 5px; /* Bordas arredondadas */
    padding: 10px 15px; /* Espaçamento interno */
    cursor: pointer; /* Cursor de ponteiro ao passar sobre */
    transition: background 0.3s; /* Transição suave para hover */
    
    &:hover {
      background: #c0392b; /* Cor de fundo ao passar o mouse */
    }
  }

  /* Animação de fade-in */
  @keyframes fadeIn {
    from {
      opacity: 0; /* Começa invisível */
      transform: translateY(-20px); /* Desloca para cima */
    }
    to {
      opacity: 1; /* Fica visível */
      transform: translateY(0); /* Volta à posição original */
    }
  }
`;


export const CloseButton = styled.button`
  background: red;
  color: white;
  font-size: 24px;
`;

export const ModalHeader = styled.h2`
  text-decoration: underline red;
`;

export const ModalImage = styled.img`
  width: 180px;
`;

// Estilos para estatísticas
export const StatisticsContainer = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const StatisticsHeading = styled.h2`
  color: black;
  text-decoration: underline red;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StatBox = styled.div`
  background: #f9f9f9;
  padding: 20px;
  text-align: center;
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  min-width: 120px;
`;

// Estilos para pilotos
export const DriverCard = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  margin: 10px;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave para profundidade */
  transition: transform 0.3s, box-shadow 0.3s; /* Transição suave para hover */
  
  /* Efeito de hover */
  &:hover {
    transform: translateY(-3px); /* Elevação ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais intensa ao passar o mouse */
  }

  /* Estilos para elementos internos */
  h3 {
    font-size: 18px; /* Tamanho da fonte do nome do piloto */
    color: #333; /* Cor do texto */
    margin-bottom: 10px; /* Espaçamento inferior */
  }

  p {
    font-size: 14px; /* Tamanho da fonte para descrição */
    color: #666; /* Cor do texto para descrição */
    line-height: 1.5; /* Espaçamento entre linhas */
    margin: 0; /* Remove margens padrão */
  }

  /* Adicionando um efeito de contorno gradual */
  border: 2px solid transparent; /* Borda padrão transparente */
  transition: border-color 0.3s; /* Transição suave para a borda */

  /* Efeito de contorno ao passar o mouse */
  &:hover {
    border: 2px solid red; /* Contorno vermelho ao passar o mouse */
  }
`;


export const DriverImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
`;

export const DriverName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

export const DriverNumber = styled.div`
  font-size: 24px;
  color: red;
  font-weight: 700;
`;

export const CountryFlag = styled.img`
  width: 35px;
  margin-right: 5px;
`;

// Estilos para "Quem É"
export const QuemEContainer = styled.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  // Estilos para o texto
  h2 {
    font-size: 24px; /* Tamanho da fonte */
    font-weight: bold; /* Peso da fonte */
    color: #333; /* Cor do texto */
    margin-bottom: 10px; /* Espaçamento inferior */
  }

  p {
    font-size: 16px; /* Tamanho da fonte para parágrafos */
    color: #666; /* Cor do texto para parágrafos */
    line-height: 1.5; /* Espaçamento entre linhas */
    margin: 0; /* Remover margens padrão */
  }
`;


// Adicione isso ao styles.js
export const DriversContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Espaço igual entre os pilotos */
  flex-wrap: wrap; /* Permite que os pilotos se movam para a próxima linha em telas menores */
  margin-top: 20px; /* Margem superior */
  padding: 20px; /* Adiciona espaçamento interno */
  background: #f9f9f9; /* Cor de fundo leve para destacar os pilotos */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  
  @media (max-width: 768px) {
    justify-content: center; /* Centraliza os pilotos em telas menores */
  }

  /* Estilo dos itens dentro do container (ex: cards dos pilotos) */
  & > div {
    flex: 1 1 200px; /* Flexível com largura mínima */
    margin: 10px; /* Espaçamento entre os itens */
    padding: 15px; /* Padding interno dos itens */
    background: white; /* Fundo branco para os itens */
    border-radius: 8px; /* Bordas arredondadas para os itens */
    border: 2px solid transparent; /* Borda padrão transparente */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Sombra suave para os itens */
    transition: transform 0.3s, box-shadow 0.3s; /* Transições suaves para hover */

    /* Efeito de hover */
    &:hover {
      transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
      box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5); /* Efeito de contorno vermelho gradativo */
    }
  }
`;

