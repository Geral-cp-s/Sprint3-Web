import { FooterGeral } from "./styledFooter.js"
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return(
        <FooterGeral>
            <h5>&copy; 2024 G4Tech. Todos os direitos reservados.</h5>
            <a href="https://github.com/Geral-cp-s/Sprint3-Web" target="_blank"><FaGithub />
            </a>
            

        </FooterGeral>
    )
}
export default Footer