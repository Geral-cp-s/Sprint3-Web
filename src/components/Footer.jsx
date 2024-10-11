import { FooterGeral } from "./styledFooter.js";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <FooterGeral>
            <h5>&copy; 2024 G4Tech | Todos os direitos reservados.</h5>
            <nav>
                <ul>
                    <li><strong>Geral</strong></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quem-somos">Quem Somos</Link></li>
                    <li><Link to="/calendario">Calendário</Link></li>
                    <li><Link to="/loja">Nossa Loja</Link></li>
                </ul>
                <ul>
                    <li><strong>Equipes</strong></li>
                    <li><Link to="/equipes/mahindra">Mahindra Racing</Link></li>
                    <li><Link to="#">Tag Heuer Porsche</Link></li>
                    <li><Link to="#">Neom McLaren</Link></li>
                    <li><Link to="/equipes">Todas as equipes</Link></li>
                </ul>
                <ul>
                    <li><strong>Fórmula-E</strong></li>
                    <li><Link to="/comparativos">Comparativos</Link></li>
                    <li><Link to="/projeto">Projeto</Link></li>
                </ul>
                <ul>
                    <li><strong>Usuário</strong></li>
                    <li><Link to="/conta">Conta</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/forum">Fórum</Link></li>
                </ul>
            </nav>
            <Link to="https://github.com/Geral-cp-s/Sprint3-Web" target="_blank">
                <FaGithub />
            </Link>
        </FooterGeral>
    );
};

export default Footer;
