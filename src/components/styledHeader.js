import styled from "styled-components"

export const  HeaderMenu = styled.nav`

/*=============== HEADER ===============*/

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--black-color);
  box-shadow: 0 2px 16px hsla(220, 32%, 8%, .3);
  z-index: var(--z-fixed);
}

/*=============== NAV ===============*/

.nav {
  height: var(--header-height);
}

.nav__logo img{
  width: 30%;
}

.nav__logo, 
.nav__burger, 
.nav__close {
  color: var(--white-color);
}

.nav__data {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__toggle {
  position: relative;
  width: 32px;
  height: 32px;
}

.nav__burger, 
.nav__close {
  position: absolute;
  width: max-content;
  height: max-content;
  inset: 0;
  margin: auto;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity .1s, transform .4s;
}

.nav__close {
  opacity: 0;
}

/* Navegação para dispositivos móveis */
@media screen and (max-width: 1118px) {
  .nav__menu {
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
    height: calc(100vh - 3.5rem);
    overflow: auto;
    pointer-events: none;
    opacity: 0;
    transition: top .4s, opacity .3s;
  }
  .nav__menu::-webkit-scrollbar {
    width: 0;
  }
  .nav__list {
    background-color: var(--black-color);
    padding-top: 1rem;
  }
}

.nav__link {
  color: var(--white-color);
  background-color: var(--black-color);
  font-weight: var(--font-semi-bold);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color .3s;
}

.nav__link:hover {
  background-color: var(--black-color-light);
}

/* Mostrar menu */
.show-menu {
  opacity: 1;
  top: 3.5rem;
  pointer-events: initial;
}

/* Mostrar icone */
.show-icon .nav__burger {
  opacity: 0;
  transform: rotate(90deg);
}
.show-icon .nav__close {
  opacity: 1;
  transform: rotate(90deg);
}

/*=============== DROPDOWN ===============*/
.dropdown__item {
  cursor: pointer;
}

.dropdown__arrow {
  font-size: 1.25rem;
  font-weight: initial;
  transition: transform .4s;
}

.dropdown__link, 
.dropdown__sublink {
  padding: 1.25rem 1.25rem 1.25rem 2.5rem;
  color: var(--white-color);
  background-color: var(--black-color-light);
  display: flex;
  align-items: center;
  column-gap: .5rem;
  font-weight: var(--font-semi-bold);
  transition: background-color .3s;
}

.dropdown__link i, 
.dropdown__sublink i {
  font-size: 1.25rem;
  font-weight: initial;
}

.dropdown__link:hover, 
.dropdown__sublink:hover {
  background-color: var(--black-color);
}

.dropdown__menu, 
.dropdown__submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease-out;
}

/* Mostrar menu suspenso e submenu */
.dropdown__item:hover .dropdown__menu, 
.dropdown__subitem:hover > .dropdown__submenu {
  max-height: 1000px;
  transition: max-height .4s ease-in;
}

/* Ícone suspenso de rotação */
.dropdown__item:hover .dropdown__arrow {
  transform: rotate(180deg);
}

/*=============== SUBMENU SUSPENSO ===============*/
.dropdown__add {
  margin-left: auto;
}

.dropdown__sublink {
  background-color: var(--black-color-lighten);
}

/*=============== BREAKPOINTS ===============*/
/* Para dispositivos pequenos */
@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }

  .nav__link {
    padding-inline: 1rem;
  }
}

/* Para grandes dispositivos */
@media screen and (min-width: 1118px) {
  .container {
    margin-inline: auto;
  }

  .nav {
    height: calc(var(--header-height) + 2rem);
    display: flex;
    justify-content: space-between;
  }
  .nav__toggle {
    display: none;
  }
  .nav__list {
    height: 100%;
    display: flex;
    column-gap: 3rem;
  }
  .nav__link {
    height: 100%;
    padding: 0;
    justify-content: initial;
    column-gap: .25rem;
  }
  .nav__link:hover {
    background-color: transparent;
  }

  .dropdown__item, 
  .dropdown__subitem {
    position: relative;
  }

  .dropdown__menu, 
  .dropdown__submenu {
    max-height: initial;
    overflow: initial;
    position: absolute;
    left: 0;
    top: 6rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s, top .3s;
  }

  .dropdown__link, 
  .dropdown__sublink {
    padding-inline: 1rem 3.5rem;
  }

  .dropdown__subitem .dropdown__link {
    padding-inline: 1rem;
  }

  .dropdown__submenu {
    position: absolute;
    left: 100%;
    top: .5rem;
  }

  /* Mostrar menu suspenso */
  .dropdown__item:hover .dropdown__menu {
    opacity: 1;
    top: 5.5rem;
    pointer-events: initial;
    transition: top .3s;
  }

  /* Mostrar submenu suspenso */
  .dropdown__subitem:hover > .dropdown__submenu {
    opacity: 1;
    top: 0;
    pointer-events: initial;
    transition: top .3s;
  }
}

`