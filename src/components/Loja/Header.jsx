import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'; // Importa o ícone de carrinho

const Header = () => {
  return (
    <>
      <FreeShippingBanner>
        Frete grátis para toda região Sudeste
      </FreeShippingBanner>
      <HeaderContainer>
        <Nav>
          <NavItem>Pedidos</NavItem>
          <NavItem>Conta</NavItem>
          <NavItem>Entre em contato</NavItem>
          <NavItem>
            <FaShoppingCart size={24} color="black" /> {/* Ícone do carrinho */}
          </NavItem>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do Header */
  background-color: #fff;
  color: var(--black-color-light);
  padding: 15px 20px; /* Aumenta o padding */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px; /* Aumenta o espaçamento entre os itens (ajustado para 50px) */
  align-items: center; /* Centraliza verticalmente os itens do nav */
  font-weight: 600;

  @media (max-width: 768px) {
    gap: 20px; /* Reduz o espaçamento em telas menores */
  }
`;

const NavItem = styled.div`
  display: flex; /* Adiciona display flex para centralizar */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  cursor: pointer;
  text-transform: uppercase;
  padding: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin: 0 10px; /* Adiciona espaçamento horizontal entre os itens */
  
  &:hover {
    transform: translateY(-4px); 
    text-decoration: underline; /* Adiciona underline ao passar o mouse */
  }
`;

const FreeShippingBanner = styled.div`
  background-color: var(--black-color-light);
  color: #fff;
  text-align: center;
  padding: 10px 0; /* Aumenta o padding */
  font-size: 16px; /* Aumenta o tamanho da fonte */
  font-weight: bold;
  border: 2px solid #0000007a;

  @media (max-width: 768px) {
    font-size: 14px; /* Reduz o tamanho da fonte em telas menores */
  }
`;
