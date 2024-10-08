import styled from "styled-components"
import React from "react";
import { useNavigate } from "react-router-dom";




const MainConta = styled.main`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--black-color-light);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 30px auto; 
    max-width: 1200px; 
    width: 100%; 
    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }
    
    #h2perfil {
        font-family: "Audiowide", sans-serif;
        color: white;
    }
    
    .team-info {
        margin-bottom: 30px;
        background: #fdfdfd;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .detail {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        
        &:last-child {
            border-bottom: none;
        }
    }
    
    .preferencias {
        display: flex;
        align-items: center;
        margin-top: 10px;
        justify-content: space-between;
        
        img {
            max-width: 90px;
            margin-right: 10px;
        }
        
        button {
            padding: 5px 10px;
            background-color: rgba(214, 58, 58, 0.76);
            color: white;
            height: 50px;
            width: 50px;
            border: none;
            border-radius: 4px;
            transition: background-color 0.3s ease;
            align-items: center;
            margin-left: 40px;
            font-size: 25px;
            border: 2px solid darkred;
            
            &:hover {
                background-color: #ad3d3d;
            }
        }
    }
    
    .bandeira {
        max-width: 20px;
        margin-left: 5px;
    }
    
    span {
        color: var(--black-color-light);
        font-size: 20px;
    }
    
    .card {
        background-color: #e94a4a;
        color: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 600px;
        width: 100%; /* Faz o card ocupar a largura total disponível */
        margin: 40px auto; /* Centraliza o card na tela */
    }
    
    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .cardh1 {
        text-align: center;
        margin: 40px 0;
    }
    
    .perfil {
        text-align: center;
        padding-bottom: 25px;
        margin-left: 45%;
    }
    
    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        .card {
            width: 100%;
            margin: 20px 0;
        }
        
        .cardh1,
        .perfil {
            margin: 0;
            text-align: center;
        }
        
        .preferencias {
            flex-direction: column;
            align-items: center;
            
            button {
                margin: 20px 0 0 0;
            }
        }
    }
    
    @media (max-width: 480px) {
        padding: 10px;
        
        .team-info {
            padding: 15px;
        }
        
        h2 {
            font-size: 20px;
        }
        
        .detail {
            flex-direction: column;
            align-items: flex-start;
            padding: 5px 0;
        }
        
        span {
            font-size: 18px;
        }
        
        .preferencias img {
            max-width: 70px;
        }
        
        button {
            font-size: 20px;
            width: 45px;
            height: 45px;
        }
        
        .card {
            padding: 15px;
        }
        
        .cardh1 {
            font-size: 18px;
            margin-bottom: 15px;
        }
    }
`

const Conta = () => {
    const navigate = useNavigate(); // Hook para navegar entre as rotas

    const handlePlanClick = () => {
        navigate("/assinatura"); // Rota para onde você quer navegar
    };
    return (
        <MainConta>
            <h2 id="h2perfil">Minha conta</h2>
            <section className="team-info">
                <img src="/img/9055969781537356155-128.png" alt="" className="perfil" />
                <div className="perfil-details">
                    <h2>Detalhes da conta</h2>
                    <div className="detail"><span className="um">Nome</span> <span className="dois">Gabriel Vasquez</span></div>
                    <div className="detail"><span className="um">E-mail</span> <span className="dois">gvqsilva@gmail.com</span></div>
                    <div className="detail"><span className="um">País</span> <span className="dois">Brasil<img id="bandeira" src="./src/img/bandeira/brasil.png" alt="" /></span></div>
                </div>
            </section>

            <section className="team-info">
                <div className="section">
                    <h2>Equipes favoritas</h2>
                    <div className="preferencias">
                        <div>
                            <img src="./img/mahindra/logo-mahindra.png" alt="Team Logo" />
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-info">
                <div className="section">
                    <h2>Pilotos favoritos</h2>
                    <div className="preferencias">
                        <div>
                            <img className="ig-piloto" src="./img/mahindra/ig-edoardo.png" alt="Edoardo" />
                            <img className="ig-piloto" src="./img/mahindra/ig-nyck.png" alt="Nyck" />
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-info">
                <div className="perfil-details">
                    <h2>Forum</h2>
                    <div className="detail"><span className="um">Ultimo comentario</span> <span className="dois">30/09/2024</span></div>
                    <div className="detail"><span className="um">Quantidade de comentarios</span> <span className="dois">839</span></div>
                    <div className="detail"><span className="um">Membro desde:</span> <span className="dois">2019</span></div>
                </div>
            </section>
            <section className="team-info">
                <div className="perfil-details">
                    <h2>Assinatura</h2>
                    <div className="detail">
                        <span className="um">Plano Atual</span> <span className="dois">Basic +</span>
                    </div>
                    <h1 className="cardh1">Melhore seu plano</h1>
                    <div className="card" onClick={handlePlanClick} style={{ cursor: "pointer" }}>
                        <h1>Plano Premium+</h1>
                        <p>+ vantagens</p>
                        <p>Se torne moderador!</p>
                    </div>
                </div>
            </section>
            );



        </MainConta>
    )
}

export default Conta