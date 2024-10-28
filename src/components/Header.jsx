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

  return (
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
  );
};

export default Header;
