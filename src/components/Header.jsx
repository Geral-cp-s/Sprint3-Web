<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { HeaderMenu } from './styledHeader';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Fecha o menu ao trocar de página
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };
=======
import styled, { createGlobalStyle } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

// Estilos globais para remover a faixa branca lateral
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; /* Remove margens padrão */
    padding: 0; /* Remove preenchimento padrão */
    width: 100%; /* Garante que o corpo ocupe toda a largura */
    background-color: var(--black-color-light); /* Defina a cor de fundo */
  }
`;

const FullWidthContainer = styled(Container)`
  width: 100%; /* Garante que o container ocupe toda a largura */
  max-width: 100%; /* Remove a largura máxima padrão */
  padding: 0; /* Remove o preenchimento padrão */
`;

const StyledNavbar = styled(Navbar)`
  background-color: var(--black-color-light);
  height: auto; /* Header se adapta ao conteúdo */
  padding: 10px 15px; /* Ajusta o padding para um melhor espaçamento */

  @media (max-width: 768px) {
    padding: 5px 10px; /* Reduz o padding em telas menores */
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  border: none; /* Remove a borda do botão */
  
  .navbar-toggler-icon {
    background-color: white; /* Cor do ícone do toggle */
    border-radius: 4px; /* Borda arredondada para melhor aparência */
    padding: 8px; /* Aumenta a área clicável */
  }
`;

const StyledNavLink = styled(Nav.Link)`
  a {
    text-decoration: none; /* Remove o underline */
    color: #fff; /* Ajustando para contrastar com o fundo escuro */
    padding: 0 10px; /* Ajusta o espaçamento dos links */
    
    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      padding: 5px 0; /* Ajusta o padding para empilhar os links em telas menores */
      display: block; /* Força o link a ser um bloco em telas pequenas */
    }
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  a {
    text-decoration: none; /* Remove o underline dos links do dropdown */
    color: #fff; /* Ajustando para contrastar com o fundo escuro */
  }
>>>>>>> 91321e9bcdb707967eda69368b272668e54fefd2

  .dropdown-menu {
    background-color: var(--black-color-light); /* Fundo do dropdown igual ao header */
    border: none;
  }

  .dropdown-item {
    color: #fff;
    text-decoration: none; /* Remove o underline dos itens do dropdown */
    &:hover {
      background-color: #007bff; /* Mudança de cor ao passar o mouse */
      color: #fff; /* Mantém o texto branco ao passar o mouse */
    }
  }
`;

const StyledBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  
  img {
    height: auto;
    max-height: 100px; /* Ajusta a logo para um tamanho mais razoável */
    width: auto;
    margin-right: 500px;

    @media (max-width: 768px) {
      max-height: 50px; /* Reduz a logo em telas menores */
    }
  }

  span {
    padding-left: 10px; /* Adiciona padding à esquerda do texto */
    color: #fff; /* Ajusta a cor do texto para branco */
    font-size: 24px; /* Ajusta o tamanho da fonte conforme necessário */
  }
`;

function Header() {
  return (
<<<<<<< HEAD
    <HeaderMenu>
      <header className="header">
        <nav className="nav-container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <img src="/img/G4_Tech-branco.png" alt="Logo" />
            </Link>

            <div className="nav__toggle" onClick={toggleMenu} id="nav-toggle">
              {menuOpen ? (
                <i className="ri-close-line nav__close"></i>
              ) : (
                <i className="ri-menu-line nav__burger"></i>
              )}
            </div>
          </div>

          <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li><Link to="/" className="nav__link">Home</Link></li>
              <li><Link to="/quem-somos" className="nav__link">Quem somos</Link></li>
              <li className="dropdown__item">
                <div className="nav__link">
                  Equipes <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/equipes/mahindra" className="dropdown__link">Mahindra Racing</Link></li>
                  <li><Link to="#" className="dropdown__link">Porsche</Link></li>
                  <li><Link to="#" className="dropdown__link">Neon McLaren</Link></li>
                  <li><Link to="/equipes" className="dropdown__link">Todas as equipes</Link></li>
                </ul>
              </li>

              <li className="dropdown__item">
                <div className="nav__link">
                  Fórmula-E <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/comparativos" className="dropdown__link">Comparativos</Link></li>
                  <li><Link to="/projeto" className="dropdown__link">Projeto</Link></li>
                </ul>
              </li>

              <li><Link to="/pistas" className="nav__link">Calendário</Link></li>

              <li className="dropdown__item">
                <div className="nav__link">
                  Usuário <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/conta" className="dropdown__link">Conta</Link></li>
                  <li><Link to="/login" className="dropdown__link">Login</Link></li>
                  <li><Link to="/forum" className="dropdown__link">Forum</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </HeaderMenu>
=======
    <>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <StyledNavbar expand="lg">
        <FullWidthContainer> {/* Usa o container de largura total */}
          <StyledBrand href="#home">
            <img src="/img/G4_Tech-branco.png" alt="G4 Tech logo" />
            
          </StyledBrand>
          <StyledToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <StyledNavLink>
                <Link to="/">Home</Link>
              </StyledNavLink>
              <StyledNavLink>
                <Link to="/quem-somos">Quem Somos</Link>
              </StyledNavLink>
              <StyledNavDropdown title="Equipes" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/equipes/mahindra">Mahindra Racing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="#">Tag Heuer Porsche</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="#">Neom McLaren</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/equipes">Todas as equipes</Link>
                </NavDropdown.Item>
              </StyledNavDropdown>
              <StyledNavDropdown title="Fórmula-E" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/comparativos">Comparativos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/projeto">Projeto</Link>
                </NavDropdown.Item>
              </StyledNavDropdown>
              <StyledNavLink>
                <Link to="/calendario">Calendário</Link>
              </StyledNavLink>
              <StyledNavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/login">Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/conta">Conta</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/forum">Fórum</Link>
                </NavDropdown.Item>
              </StyledNavDropdown>
            </Nav>
          </Navbar.Collapse>
        </FullWidthContainer>
      </StyledNavbar>
    </>
>>>>>>> 91321e9bcdb707967eda69368b272668e54fefd2
  );
}

export default Header;
