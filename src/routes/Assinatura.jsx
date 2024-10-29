import styled from "styled-components"

const MainAssinatura = styled.main`
    
    display: flex;
    flex-direction: column; 
    align-items: center; 
    flex-grow: 1;

    h1 {
        margin: 2rem 0; 
        text-align: center; 
        width: 100%; 
        max-width: 800px;
        margin-top: 55px;
        font-family: "Audiowide", sans-serif;
        font-size: 50px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Ajusta alinhamento das divs */
        max-width: 1260px;
        padding: 2rem 0;
    }

    .plan {
        border-radius: 16px;
        padding: 10px;
        background-color: #fff;
        color: #697e91;
        max-width: 300px;
        margin-bottom: 10rem;
        margin-top: 5rem;
        transition: transform 0.3s ease, background-color 0.3s ease;
            &:hover {
                transform: translateY(-25px); /* Efeito de elevação ao passar o mouse */
        }  
    }



    .plan .inner {
        align-items: center;
        padding: 20px;
        padding-top: 40px;
        background-color: #ecf0ff;
        border-radius: 12px;
        position: relative;
    }

    .plan .pricing {
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(233, 41, 41, 0.384);
        border-radius: 99em 0 0 99em;
        display: flex;
        align-items: center;
        padding: 0.625em 0.75em;
        font-size: 1.25rem;
        font-weight: 600;
        color: #ffffff;
    }

    .plan .pricing small {
        color: #ffffff;
        font-size: 0.75em;
        margin-left: 0.25em;
    }

    .plan .title {
        font-weight: 600;
        font-size: 1.25rem;
        color: #425675;
    }

    .plan .title + * {
        margin-top: 0.75rem;
    }

    .plan .info + * {
        margin-top: 1rem;
    }

    .plan .features {
        display: flex;
        flex-direction: column;
    }

    .plan .features li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .plan .features li + * {
        margin-top: 0.75rem;
    }

    .plan .features .icon {
        background-color: rgba(233, 41, 41, 0.938);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }

    .plan .features .icon svg {
        width: 14px;
        height: 14px;
    }

    .plan .features + * {
        margin-top: 1.25rem;
    }

    .plan .action {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .plan .button {
        background-color: rgba(233, 41, 41, 0.945);;
        border-radius: 6px;
        color: #fff;
        font-weight: 500;
        font-size: 1.125rem;
        text-align: center;
        border: 0;
        outline: 0;
        width: 100%;
        padding: 0.625em 0.75em;
        text-decoration: none;
    }

    .plan .button:hover, .plan .button:focus {
        background-color: rgba(233, 41, 41, 0.5);;
    }
    
    #bronze{
        border: 5px solid rgb(205, 127, 50);
        padding: 15px;
    }
    #ouro{
        border: 5px solid rgb(255, 215, 0);
        padding: 15px;
        
    }

    #prata{
        border: 5px solid #888;
        padding: 15px;
    }

    #bronzep{
        background-color:rgb(180, 116, 52) ;
    }
    #ourop{
        background-color:rgb(231, 199, 14) ;
    }

    #pratap{
        background-color: rgb(163, 163, 163);
    }



`

const Assinatura = () => {
    return (
        <MainAssinatura>
            <h1> Planos de Assinatura</h1>
            
            <div className="container">
                <div class="plan" id="bronze">
                    <div class="inner">
                        <span class="pricing" id="bronzep">
                            <span>
                                R$14,90 <small>/ m</small>
                            </span>
                        </span>
                        <p class="title">Basic +</p>
                        <p class="info">"O Plano Basic+ é ideal para aqueles que estão começando e querem explorar o básico com algumas vantagens extras."</p>
                        <ul class="features">
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Assistir Sem Anúncios (parcial)</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Acesso antecipado</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Descontos de 5% na loja</span>
                            </li>
                        </ul>
                        <div class="action">
                            <a class="button" href="#">
                                Escolher plano
                            </a>
                        </div>
                    </div>
                </div>

                <div class="plan" id="prata">
                    <div class="inner">
                        <span class="pricing" id="pratap">
                            <span>
                                R$35,90 <small>/ m</small>
                            </span>
                        </span>
                        <p class="title">Premium +</p>
                        <p class="info">"O Plano Premium+ é feito para os que buscam exclusividade e desejam se destacar com acesso a funcionalidades premium."</p>
                        <ul class="features">
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Assistir Sem Anúncios (completo)</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Acesso a um grupo VIP</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Desconto de 10% na loja</span>
                            </li>
                        </ul>
                        <div class="action">
                            <a class="button" href="#">
                                Escolher plano
                            </a>
                        </div>
                    </div>
                </div>

                <div class="plan" id="ouro">
                    <div class="inner">
                        <span class="pricing" id="ourop">
                            <span>
                                R$69,90 <small>/ m</small>
                            </span>
                        </span>
                        <p class="title">PRO</p>
                        <p class="info">"Para os profissionais que precisam de ferramentas completas e suporte avançado, o Plano Pro é o ideal."</p>
                        <ul class="features">
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Assistir Sem Anúncios (completo)</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Brindes mensais</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Acesso a um grupo VIP</span>
                            </li>
                            <li>
                                <span class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span>Desconto de 20% na loja</span>
                            </li>
                        </ul>
                        <div class="action">
                            <a class="button" href="#">
                                Escolher plano
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </MainAssinatura>
    )
}

export default Assinatura 