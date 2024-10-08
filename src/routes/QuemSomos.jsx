// Para a página QuemSomos optamos em utilizar Bootpstrap aliado ao Styled-components para fazermos a estilização da página.
// Também utilizamos icones do Bootstrap


import styled from "styled-components"
import FotoAugusto from "../../public/img/augusto.png"
import FotoGabriel from "../../public/img/gabriel.png"
import FotoGuilherme from "../../public/img/guilherme.png"
import FotoGustavo from "../../public/img/gustavo.png"

const MainQuemSomos = styled.main`

    .icon {
        font-size: 60px;
        color: #222;
        margin: 24px 0;
        transition: .5s;
    }

    .card {
        transition: .5s;
    }

    .card:hover {
        background-color: #222;
        color: #fff
    }

    .card:hover .icon {
        transform: scale(1.5);
    }

    .icon-social,
    .icon-contato {
        font-size: 2rem;
        color: #000;
        transition: .5s;
    }

    .icon-social:hover {
        color: #fff;
    }

    h1 {
        font-family: "Audiowide", sans-serif;
        font-size: 1.7; /* Tamanho da fonte */
        color: #1a252f; /* Cor do texto um pouco mais escura */
        text-align: center; /* Centraliza o título */
        margin: 20px 0; /* Espaçamento em cima e embaixo */
        font-weight: bold; /* Negrito */
        text-transform: uppercase; /* Transformação do texto para maiúsculas */
        letter-spacing: 1px; /* Espaçamento entre as letras */
        text-decoration: underline; /* Adiciona sublinhado */
        text-decoration-color: red; /* Cor do sublinhado */
    }

    h3 {
    font-family: "Roboto", system-ui;}
    
    p {
    margin:40px 30px 50px;
    }
`

const QuemSomos = () => {
    return(
        <MainQuemSomos>
            <section class="container mb-5" id="equipe">
                <h1 class="my-title text-center my-mt">Equipe</h1>
                <p>No início de 2024, começamos o curso de Engenharia de Software na FIAP com grande entusiasmo pelo   desenvolvimento web. Desde o início, a experiência tem sido transformadora. Participamos de   hackathons, workshops e desafios práticos, mergulhando em novas tecnologias e discutindo tendências   emergentes. Cada projeto e atividade nos proporcionou oportunidades valiosas para aplicar o que   aprendemos e explorar nossa criatividade. Nossa jornada até agora tem sido marcada pela colaboração   intensa e pela busca constante de inovação. Estamos motivados por um objetivo comum: fazer a diferença    na indústria de tecnologia e enfrentar os desafios do futuro com determinação e criatividade. A cada   passo, sentimos que estamos cada vez mais preparados para transformar o cenário digital e deixar nossa    marca no mundo da engenharia de software. Se quiser saber mais sobre nós ou compartilhar ideias, segue     nossos links do <strong>GITHUB</strong>.</p>
                <h3 class="text-center my-title mb-4">Esse é o nosso time</h3>

                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-lg-3 my-2">
                        <div class="card text-center">
                            <img src={ FotoAugusto } class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h4 class="my-title my-3">Augusto</h4>
                                <p class="card-text mb-4">RM - 558371</p>
                                <div class="mt-5">
                                    <a href="https://www.linkedin.com/in/augusto-mendon%C3%A7a-3740ab2b0/"><i class="fa-brands fa-linkedin icon-social mx-2"></i></a>
                                    <a href="https://github.com/gutomend"><i class="fa-brands fa-github icon-social mx-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 my-2">
                        <div class="card text-center">
                            <img src={ FotoGabriel } class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h4 class="my-title my-3">Gabriel</h4>
                                <p class="card-text">RM - 557056</p>
                                <div class="mt-5">
                                    <a href="https://www.linkedin.com/in/gabriel-vasquez-queiroz-da-silva-634b47277/"><i class="fa-brands fa-linkedin icon-social mx-2"></i></a>
                                    <a href="https://github.com/gvqsilva"><i class="fa-brands fa-github icon-social mx-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 my-2">
                        <div class="card text-center">
                            <img src={ FotoGuilherme } class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h4 class="my-title my-3">Guilherme</h4>
                                <p class="card-text mb-4">RM - 558926</p>
                                <div class="mt-5">
                                    <a href="https://www.linkedin.com/in/guilherme-ara%C3%BAjo-51347025b/"><i class="fa-brands fa-linkedin icon-social mx-2"></i></a>
                                    <a href="https://github.com/guilhermearaujodec"><i class="fa-brands fa-github icon-social mx-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 my-2">
                        <div class="card text-center">
                            <img src={ FotoGustavo } class="card-img-top"
                                alt="..."/>
                            <div class="card-body">
                                <h4 class="my-title my-3">Gustavo</h4>
                                <p class="card-text mb-4">RM - 559163</p>
                                <div class="mt-5">
                                    <a href="https://www.linkedin.com/in/gustavo-oliveira-a372a4308/"><i class="fa-brands fa-linkedin icon-social mx-2"></i></a>
                                    <a href="https://github.com/Gusta346"><i class="fa-brands fa-github icon-social mx-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainQuemSomos>
    )
}
export default QuemSomos