import { FooterGeral } from "./styledFooter.js";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return(
        <FooterGeral>
            <h5>&copy; 2024 G4Tech | Todos os direitos reservados.</h5>
            <nav>
                <ul>
                    <li><strong>Geral</strong></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/quem-somos">Quem Somos</a></li>
                    <li><a href="/pistas">Pistas</a></li>
                    <li><Link to="/loja">Acesse nossa loja</Link></li>
                </ul>
                <ul>
                    <li><strong>Equipes</strong></li>
                    <li><a href="/equipes/mahindra">Mahindra Racing</a></li>
                    <li><a href="#">Tag Heuer Porsche</a></li>
                    <li><a href="#">Neom McLaren</a></li>
                    <li><a href="/equipes">Todas as equipes</a></li>
                </ul>
                <ul>
                    <li><strong>Fórmula-E</strong></li>
                    <li><a href="/comparativos">Comparativos</a></li>
                    <li><a href="/projeto">Projeto</a></li>
                </ul>
                <ul>
                    <li><strong>Usuário</strong></li>
                    <li><a href="/conta">Conta</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/forum">Fórum</a></li>
                </ul>
            </nav>
            <a href="https://github.com/Geral-cp-s/Sprint3-Web" target="_blank">
                <FaGithub />
            </a>
        </FooterGeral>
    );
};

export default Footer;
