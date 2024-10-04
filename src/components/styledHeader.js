import styled from "styled-components";

export const HeaderMenu = styled.nav`
  /* Container Geral */
  background-color: var(--black-color-light);
  padding: 1rem 2rem;
  color: #fff;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  /* Logo */
  .nav__logo img {
<<<<<<< HEAD
    transform: scale(1.2); /* Aumente a escala do logo (ajuste conforme necessário) */
    transition: transform 0.3s ease; /* Adicione uma transição suave para o efeito de hover */
    height: 100px;
=======
    height: 80px;
    transform: scale(1.2);
    transition: transform 0.3s ease;
>>>>>>> f97b2545466885f8423d00c9983ab0f51c89e0b0
  }

  .nav__logo img:hover {
    transform: scale(1.25);
  }

  /* Toggle para mobile */
  .nav__toggle {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 2rem; /* Move o ícone para o lado direito */
    top: 0.5rem; /* Ajuste para mover o ícone para cima */
  }

  .nav__close {
    display: none;
  }

  /* Estilo quando o menu está aberto */
  .show-icon .ri-menu-line {
    display: none;
  }

  .show-icon .ri-close-line {
    display: inline-block;
  }

  /* Menu Principal */
  .nav__menu {
    display: none;
  }

  .show-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--black-color-light); /* Definindo a cor de fundo do menu */
    padding: 1rem 2rem;
    width: 100%;
    z-index: 10;
  }

  .nav__list {
    display: flex;
    align-items: flex-end;
    list-style: none;
    flex-direction: column;
    gap: 1rem;
  }

  .nav__link {
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    font-size: 20px;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: #00aaff;
      transform: translateY(-2px);
      text-decoration: underline;
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
    background-color: var(--black-color-light); /* Mantendo a mesma cor para o dropdown */
    padding: 1rem 0;
    min-width: 180px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    border-radius: 10px;
    z-index: 100;

    .dropdown__link {
      color: #fff;
      padding: 0.5rem 1.5rem;
      display: block;
      text-decoration: none;

      &:hover {
        background-color: #444;
        color: #00aaff;
        text-decoration: underline;
      }
    }
  }

  .dropdown__arrow {
    margin-left: 0.5rem;
    font-size: 1rem;
    transition: transform 0.4s;
  }

  /* Estilos para mobile */
  @media (max-width: 768px) {
    .nav__menu {
      display: none;
    }

    .show-menu {
      display: flex;
      background-color: var(--black-color-light); /* Cor de fundo no menu toggle para mobile */
    }

    .nav__list {
      flex-direction: column;
      align-items: flex-end;
    }

    .nav__link {
      padding: 1rem;
    }

    .dropdown__menu {
      position: relative;
      box-shadow: none;
    }

    .nav__toggle {
      right: 1.5rem;
      top: 0.5rem; /* Ajuste para mover o ícone para cima no mobile */
    }
  }
`;
