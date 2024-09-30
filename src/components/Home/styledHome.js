import styled from "styled-components";

export const MainHome = styled.main`

    flex-grow: 1;           /* aliado ao display flex manda o header e o footer para as extremidades da sala */
    background-color: #ddf;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'sec1 sec1'
    'sec2 sec3'
    'sec4 sec5'
    'sec6 sec7';


    .secao1 {grid-area: sec1;}
    .secao2 {grid-area: sec2;}
    .secao3 {grid-area: sec3;}
    .secao4 {grid-area: sec4;}
    .secao5 {grid-area: sec5;}
    .secao6 {grid-area: sec6;}
    .secao7 {grid-area: sec7;}

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
        'sec1'
        'sec2'
        'sec3'
        'sec4'
        'sec5';
    }
`

export const SectionGeral = styled.section`

    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        background-color: orange;

    }


`