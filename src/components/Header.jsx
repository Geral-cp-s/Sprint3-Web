// src/components/Header.js

import { useEffect } from 'react';
import { HeaderMenu } from './styledHeader';
import { Link } from 'react-router-dom';


const Header = () => {
  useEffect(() => {
    const toggleMenu = () => {
      const nav = document.getElementById('nav-menu');
      const toggle = document.getElementById('nav-toggle');

      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    };

    const toggle = document.getElementById('nav-toggle');
    toggle.addEventListener('click', toggleMenu);

    return () => {
      toggle.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <HeaderMenu>
      <header className="header">
        <nav className="nav-container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <img src="/img/G4_Tech-branco.png" alt="Logo" />
            </Link>

            {/* Botão de Toggle do Menu */}
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          {/* NAV MENU */}
          <div className={`nav__menu`} id="nav-menu">
            <ul className="nav__list">
              <li><Link to="/" className="nav__link">Home</Link></li>
              <li><Link to="/quem-somos" className="nav__link">Quem somos</Link></li>

              {/* MENU SUSPENSO 1 */}
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

              {/* MENU SUSPENSO 2 */}
              <li className="dropdown__item">
                <div className="nav__link">
                  Fórmula-E<i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/comparativos" className="dropdown__link">Comparativos</Link></li>
                </ul>
              </li>

              <li><Link to="/pistas" className="nav__link">Pistas</Link></li>

              {/* MENU SUSPENSO 3 */}
              <li className="dropdown__item">
                <div className="nav__link">
                  Usuário <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/login" className="dropdown__link">Login</Link></li>
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
