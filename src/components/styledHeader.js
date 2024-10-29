import styled from "styled-components";

export const HeaderMenu = styled.nav`
  /* Container Geral */
  font-family: "Audiowide", sans-serif;
  background-color: var(--black-color-light);
  padding: 1rem 2rem;
  color: #fff;
  z-index: 1000;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Logo */
  .nav__logo img {
    height: 90px;
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }

  .nav__logo img:hover {
    transform: scale(1.25);
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
    list-style: none;
  }

  .nav__link {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, transform 0.2s ease; 
    text-align: left;
    font-size: 24px; /* Reduzido de 28px para 24px */

    &:hover {
      color: rgba(233, 41, 41, 0.938);
    }
  }

  /* Menu Suspenso (Dropdown) */
  .dropdown__item {
    position: relative;

    &:hover .dropdown__menu {
      display: block;
    }
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
    text-align: left;
    border-radius: 10px;
    z-index: 1001;
    font-family: "Roboto", system-ui;
    font-size: 20px;
    pointer-events: auto;

    .dropdown__list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .dropdown__link {
      color: #fff;
      padding: 0.5rem 1.5rem;
      display: block;
      text-decoration: none;

      &:hover {
        background-color: rgba(233, 41, 41, 0.938);
        text-decoration: underline;
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
      position: fixed;
      top: 0;
      right: 0;
      background-color: #222;
      padding: 1rem 1.5rem;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 1000;
    }

    .nav__menu.show-menu {
      display: flex;
    }

    .nav__list {
      flex-direction: column;
      list-style: none;
    }

    .nav__link {
      padding: 1rem;
    }

    .dropdown__menu {
      position: relative;
      box-shadow: none;
    }

    .dropdown__item:hover .dropdown__menu {
      display: block;
    }
  }
`;
