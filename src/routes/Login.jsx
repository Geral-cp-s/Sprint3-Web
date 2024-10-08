import React, { useState,useRef,useEffect } from 'react';
import styled from "styled-components"
import { useParams,useNavigate } from "react-router-dom"

const MainLogin = styled.main`
    
    .body{
        display: flex;
        justify-content: center;
        flex-grow: 1;
        text-align: center;
        height: 90dvh;
        margin: 25px;
        font-family: "Roboto", system-ui;
        font-size: 20px;
    }



    h1{
        font-family: "Audiowide", sans-serif;
        font-weight: 700;
        letter-spacing: -1.5px;
        margin: 0;
        margin-bottom: 15px;
    }
    h1.titulo{
        font-size: 45px;
        line-height: 45px;
        margin: 0;
        text-shadow: 0 0 10px rgba(233, 41, 41, 0.5);
    }
    p{
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
        text-shadow: 0 0 10px rgba(233, 41, 41, 0.5);
    }
    span{
        font-size: 14px;
        margin-top: 15px;
    }
    a{
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
        transition: 0.3s ease-in-out;
    }
    a:hover{
        color: #ad3d3d;
    }
    .content{
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: space-around;

    }
    .content .checkbox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content input{
        accent-color: #333;
        width: 12px;
        height: 12px;
    }
    .content label{
        font-size: 14px;
        user-select: none;
        padding-left: 5px;
    }
    button{
        position: relative;
        border-radius: 15px;
        border: 1px solid #c53333;
        background-color: #af2424;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        margin: 10px;
        padding: 12px 80px;
        letter-spacing: 1px;
        text-transform: capitalize;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        letter-spacing: 3px;
    }
    button:active{
        transform: scale(0.9);
    }
    button:focus{
        outline:none
    }
    button.ghost{
        background-color: rgba(255, 42, 42, 0.2);
        border: 2px solid #fff;
        color: #fff;
    }
    button.ghost i{
        position: absolute;
        opacity: 1;
        transition: 0.3s ease-in-out;
    }
    button.ghost i.register{
        right: 70px;
    }
    button.ghost i.login{
        left: 70px;
    }
    button.ghost i.register:hover{
        right: 40px;
    }
    button.ghost i.login:hover{
        left: 40px;
    }
    form{
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }
    input{
        background-color: #eee;
        border-radius: 10px;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }
    .container{
        background-color: #fff;
        border-radius: 25px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 500px;
    }
    .form-container{
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }
    .login-container{
        left: 0;
        width: 50%;
        z-index: 2;
    }
    .container.right-panel-active .login-container{
        transform: translateX(100%);
    }
    .register-container{
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }
    .container.right-panel-active .register-container{
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.5s;
    }
    @keyframes show{
        0%,
        49.99%{
            opacity: 0;
            z-index: 1;
        }
        50%,
        100%{
            opacity: 1;
            z-index: 5;
        }
    }
    .overlay-container{
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }
    .container.right-panel-active .overlay-container{
        transform: translate(-100%);
    }
    .overlay{
        background-image: url(/img/Login/pexels-alexwolfmx-14401647.jpg); /* Caminho para a imagem */
        background-repeat: no-repeat;
        background-size: cover; /* Ajusta o tamanho da imagem para cobrir toda a área */
        background-position: center; 
        color: #fff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }


    .overlay::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(
            to top,
            rgba(46, 94, 109, 0.4) 40%,
            rgba(46, 94, 109, 0)
        );
    }
    .container.right-panel-active .overlay{
        transform: translateX(50%);
    }
    .overlay-panel{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }
    .overlay-left{
        transform: translateX(-20%);
    }
    .container.right-panel-active .overlay-left{
        transform: translateX(0);
    }

    .overlay-right{
        right: 0;
        transform:translateX(0);
        
    }
    .container.right-panel-active .overlay-right{
        transform: translateX(20%);
    }
    .social-container{
        margin: 20px 0;
    }
    .social-container a{
        border: 1px solid #dddddddd;
        border: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 50px;
        width: 40px;
        transition: 0.3s ease-in-out;
    }
    .social-container a:hover{
        border: 1px solid #b74b4b;
    }
    @media screen and (max-width: 1000px) {

        .container{
            width: 100%;
            height: 70%;
        }
        .form-container{
            font-size: 20px;
        }
        .social-container{
            display: flex;
        }
        .botao{
            width: 80%;
            display: flex;
            justify-content: center;
        }
        .ghost{
            width: 80%;
            display: flex;
            justify-content: center;
        }
        .input{
            width: 150px;
        }

    }


`

const Login = () => {


    let {id} =useParams();
    const navigate = useNavigate();

    
    const email = useRef();
    const senha = useRef();

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);


    const [registro,setRegistro] = useState({
        id,
        nome:'',
        senha:'',
        email:'',

    });

    
    const handleChange=(e)=>{
        setRegistro({...registro,[e.target.name]: e.target.value});
    }
    


    sessionStorage.getItem("email");
    sessionStorage.getItem("senha");
    const handleLogin = (e) => {
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();

        if(email.current.value ==!  "" && senha.current.value ==! "" ){
            alert("usuario/senha inválidos")

        }
        else {
            sessionStorage.setItem("email", "email");
            sessionStorage.setItem("senha", "senha");
            navigate("/conta");
        }
    }

    useEffect(() => {
        //pega o link da url
        fetch("http://localhost:5000/registro")
            //promise
            .then((res) => {
                //converte os dados para json
                return res.json();
            })
            .then((res) => {
                //recebe as alterações da variavel
                setRegistro(res)
            })
        //retrona um array vazio
    }, [])

    const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();
        fetch(`http://localhost:5000/registro${id ? id :''}`,{
            method:"post",
            headers: {
                'Content-type':'application/json',
            },
            //prepara para receber os dados em json
            body:JSON.stringify(registro),
            //então se estiver tudo certo ele direciona para o componente que deseja
        }).then(()=>{
            // navigate("/listarUsuarios")
        })
    }
    

    const handleRegistrationClick = () => {
        setIsRightPanelActive(true);
    };

    const handleLoginClick = () => {
        setIsRightPanelActive(false);
    };


    return (
        <MainLogin>
            <main className='body'>
            <div id="container" className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container register-container">
                    <form action="#" onSubmit={handleSubmit}>
                        <h1 className="registro-texto">Registre-se aqui</h1>
                        <input className="input" type="text" placeholder="Nome" name="nome" value={registro.nome} onChange={handleChange} />
                        <input className="input" type="email" placeholder="E-mail"  name="email" value={registro.email} onChange={handleChange}/>
                        <input className="input" type="password" placeholder="Senha" name="senha" value={registro.senha} onChange={handleChange}/>
                        {/* <input className="input" type="password" placeholder="Confirme sua senha" /> */}
                        <button className="botao" onClick={handleRegistrationClick}>Registrar</button>
                        <span>Ou use sua conta</span>
                        <div className="social-container">
                            <a href="https://www.facebook.com">
                                <img src="/img/Login/icons8-facebook-novo-50.png" className="social" />
                            </a>
                            <a href="https://www.linkedin.com">
                                <img src="/img/Login/icons8-linkedin-50.png" className="social" />
                            </a>
                            <a href="https://www.google.com">
                                <img src="/img/Login/icons8-google-logo-50.png" className="social" />
                            </a>
                        </div>
                    </form>
                </div>

                <div className="form-container login-container">
                    <form action="#" onSubmit={handleLogin}>
                        <h1>Logue aqui</h1>
                        <input className="input" type="email" placeholder="E-mail" id="usuario" ref={email} />
                        <input className="input" type="password" placeholder="Senha" id="senha"  ref={senha}/>
                        <div className="content">
                            <div className="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label>Lembrar</label>
                            </div>
                        </div>
                        <button className="botao" onClick={handleLoginClick}>Login</button>
                        <span>Ou use sua conta</span>
                        <div className="social-container">
                            <a href="https://www.facebook.com">
                                <img src="/img/Login/icons8-facebook-novo-50.png" className="social" />
                            </a>
                            <a href="https://www.linkedin.com">
                                <img src="/img/Login/icons8-linkedin-50.png" className="social" />
                            </a>
                            <a href="https://www.google.com">
                                <img src="/img/Login/icons8-google-logo-50.png" className="social" />
                            </a>
                        </div>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="titulo">Bem-vindo(a) <br /> à Corrida</h1>
                            <p className="texto">Se você tem uma conta, logue aqui e se divirta</p>
                            <button className="ghost" id="login" onClick={handleLoginClick}>Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="titulo">Comece sua <br />Jornada agora</h1>
                            <p className="texto">Se você não tem uma conta ainda, junte-se a nós</p>
                            <button className="ghost" id="register" onClick={handleRegistrationClick}>Registre-se
                                <i className="ini ini-arrow-right register"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </main>


        </MainLogin>
    )
}
export default Login