import styled from "styled-components";

export const FooterGeral = styled.footer`
    font-family: "Roboto", system-ui;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color:var(--black-color-light);
    color: white;
    text-align: center;

    nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Quatro colunas */
        gap: 20px; /* Espaçamento entre as colunas */
        width: 100%;
        max-width: 1200px;
        margin: 20px 0;
    }

    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav ul li {
        margin: 5px 0;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
        font-size: 14px; /* Diminui o tamanho da fonte */
    }

    nav ul li a:hover {
        text-decoration: underline;
    }

    nav ul li strong {
        font-size: 20px;
        text-transform: uppercase;
    }

    h5 {
        font-size: 15px; /* Tamanho do texto do copyright */
        margin: 10px;
    }

    a {
        color: white;
        margin-top: 10px;
        font-size: 24px; /* Tamanho do ícone do GitHub */
    }
`;
