import styled from "styled-components"

export const  HeaderMenu = styled.nav`

/* Container Geral */
.header {
    background-color: var(--black-color-light);
    padding: 1rem 2rem;
    color: #fff;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo img {
    height: 60px;
  }

  .nav__data {
    display: flex;
    align-items: center;
  }

  .nav__toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Estilo do Menu */
  .nav__menu {
    display: flex;
    gap: 2rem;
  }

  .nav__list {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .nav__link {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
    text-align: left; /* Alinha o texto à esquerda */
  }

  .nav__link:hover {
    color: #00aaff;
  }

  /* Menu Suspenso (Dropdown) */
  .dropdown__item {
    position: relative;
  }

  .dropdown__menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--black-color-light);
    padding: 1rem 0;
    min-width: 180px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left; /* Alinhamento de texto à esquerda */
    padding-left: 0.5rem; /* Movendo o texto para a esquerda */
  }

  .dropdown__item:hover .dropdown__menu {
    display: block;
  }

  .dropdown__link {
    color: #fff;
    padding: 0.5rem 1.5rem; /* Aumentando o padding para alinhar melhor */
    display: block;
    text-decoration: none;
    transition: background-color 0.3s ease;
    text-align: left; /* Alinhamento de texto à esquerda */
  }

  .dropdown__link:hover {
    background-color: #444;
  }

  /* Ícone de seta do dropdown */
  .dropdown__arrow {
    margin-left: 0.5rem;
    font-size: 1rem;
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
    }

    .nav__menu.show-menu {
      display: flex;
    }

    .nav__list {
      flex-direction: column;
    }

    .nav__link {
      padding: 1rem;
    }

    .dropdown__menu {
      position: relative;
      box-shadow: none;
    }

    .dropdown__item:hover .dropdown__menu {
      display: none;
    }
  }


`