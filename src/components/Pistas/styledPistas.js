import styled from "styled-components";

// Container principal que envolve todos os cards de pistas
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: lightgray; /* Fundo suave */
    min-height: 100vh; /* Garante que a altura mínima cubra a tela */
`;

// Estilo individual de cada card de pista
export const Card = styled.div`
    width: 320px;
    margin: 20px;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    cursor: pointer;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

// Seção que exibe a data de cada corrida (dia e mês)
export const DateSection = styled.div`
    background-color: #e9ecef;
    padding: 15px;
    text-align: center;
    border-bottom: 2px solid #ddd;

    span {
        display: block;
        font-size: 1.4em;
        font-weight: 600;
        color: #343a40;
    }
`;

// Seção para exibir detalhes (bandeira e nome da cidade)
export const DetailsSection = styled.div`
    padding: 15px;
    background-color: #ffffff;

    p {
        margin: 5px 0;
        color: #6c757d;
    }
`;

// Seção para bandeira e nome da cidade
export const FlagSection = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 35px;
        margin-right: 10px;
    }

    span {
        font-weight: bold;
        font-size: 1.2em;
        color: #495057;
    }
`;

// Seção para a imagem da pista
export const ImageSection = styled.div`
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

// Modal de fundo escuro para exibir informações detalhadas
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px); /* Desfoque ao fundo */
`;

// Conteúdo do modal, onde as informações serão mostradas
export const ModalContent = styled.div`
    background-color: #fff;
    padding: 8px; /* Reduzindo ainda mais o padding */
    width: 80%; /* Largura um pouco menor */
    max-width: 300px; /* Diminuindo a largura máxima */
    border-radius: 8px; /* Borda mais suave */
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Sombra leve */
    animation: fadeIn 0.4s ease; /* Transição suave ao abrir */

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        padding: 6px; /* Ajuste do padding em telas menores */
        max-width: 90%;
    }
`;

// Detalhes do evento exibidos dentro do modal
export const EventDetails = styled.div`
    h2 {
        margin-bottom: 8px; /* Ajustando a margem */
        font-size: 1.3em; /* Reduzindo o tamanho da fonte */
        color: #343a40;
        text-align: center;
        color: var(--black-color-light);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 6px; /* Borda suave na imagem */
        margin-bottom: 8px; /* Ajustando a margem */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra mais leve na imagem */
    }

    p {
        text-align: center;
        margin: 4px 0; /* Ajustando a margem */
        font-size: 0.9em; /* Reduzindo o tamanho da fonte */
        color: #495057;
        line-height: 1.4; /* Melhor espaçamento entre linhas */
    }

    .pmodal {
        font-size: 0.9em; /* Ajustando o tamanho da fonte */
        color: #6c757d;
    }

    .legenda {
        font-weight: bold;
        color: #868e96;
    }
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.8em;
    cursor: pointer;
    color: #6c757d;

    &:hover {
        color: #343a40;
    }
`;

