import styled from "styled-components";


export const HeaderMenu = styled.nav`
  /* Container Geral */
  font-family: "Audiowide", sans-serif;
  background-color: var(--black-color-light);
  padding: 1rem 2rem;
  color: #fff;
  z-index:1000;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Logo */
  .nav__logo img {
    height: 90px; /* Mantenha a altura do cabeçalho */
    transform: scale(1.2); /* Aumente a escala do logo (ajuste conforme necessário) */
    transition: transform 0.3s ease; /* Adicione uma transição suave para o efeito de hover */

  }

  .nav__logo img:hover {
    transform: scale(1.25); /* Aumenta a escala ao passar o mouse */
  }

  /* Toggle para mobile */
  .nav__toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Menu Principal */
  .nav__menu {
    display: flex;
    gap: 2rem;
  }

  .nav__list {
    display: flex;
    align-items: center;
    list-style: none; /* Remove as bolinhas do menu principal */
  }

  .nav__link {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, transform 0.2s ease; 
    text-align: left;
    font-size: 28px;
  }


    &:hover {
      color: rgba(233, 41, 41, 0.938); /* Mudando a cor do texto ao passar o mouse */
       /* Adiciona underline ao passar o mouse */
    }
  

  /* Menu Suspenso (Dropdown) */
  .dropdown__item {
    position: relative;

    /* Permitir que o dropdown apareça ao passar o mouse */
    &:hover .dropdown__menu {
      display: block; /* Mostra o menu quando o mouse está sobre o item */
    }
  }

  .dropdown__menu {
    display: none; /* Mude para none para esconder por padrão */
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--black-color-light);
    padding: 1rem 0;
    min-width: 180px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    border-radius: 10px;
    z-index: 100; /* Garante que o dropdown esteja acima de outros elementos */
    font-family: "Roboto", system-ui;
    font-size: 20px;
    pointer-events: auto;

    /* Removendo bolinhas do menu dropdown */
    .dropdown__list {
      list-style: none; /* Remove as bolinhas do dropdown */
      padding: 0; /* Remove o padding padrão */
      margin: 0; /* Remove a margem padrão */
      
    }

    .dropdown__link {
      color: #fff;
      padding: 0.5rem 1.5rem;
      display: block;
      text-decoration: none;


      &:hover {
        background-color:rgba(233, 41, 41, 0.938);
        text-decoration: underline; /* Adiciona underline ao passar o mouse */
      }
    }
  }

  /* Ícone de seta do dropdown */
  .dropdown__arrow {
    margin-left: 0.5rem;
    font-size: 1rem;
    transition: transform 0.4s;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .nav__toggle {
      display: block;
    }

    .nav__menu {
      display: none;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #222;
      padding: 1rem 2rem;
      width: 100%;
      z-index: 10; /* Adicionando z-index para sobrepor outros elementos */
    }

    .nav__menu.show-menu {
      display: flex;
    }

    .nav__list {
      flex-direction: column;
      list-style: none; /* Remove as bolinhas do menu principal no mobile */
    }

    .nav__link {
      padding: 1rem;
    }

    .dropdown__menu {
      position: relative;
      box-shadow: none;
      /* display: none; Oculto por padrão */
    }

    .dropdown__item:hover .dropdown__menu {
      display: block; /* Mostrar no hover */
    }
  }
`;
