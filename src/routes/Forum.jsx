import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Card from '../components/Card';
import styled from 'styled-components';

const MainForum = styled.main`


.forum-container {
    display: flex;                /* Usando flexbox para organizar os elementos */
    flex-direction: row;          /* Coloca os elementos lado a lado */
    gap: 20px;                    /* Espaço entre o formulário e os comentários */
    margin: 30px;
    flex-wrap: wrap;              /* Permite que o layout se ajuste em telas menores */
    width: 100%;
}

/* Container para o formulário e o vídeo */
.forum-and-video {
    display: flex;
    flex-direction: column;       /* O vídeo ficará abaixo do formulário */
    flex: 1;                      /* Ocupará parte do espaço total */
}

/* Formulário */
#form {
    padding: 20px;
    background-color: var(--black-color-light);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 6px solid rgba(233, 41, 41, 0.5);
}

/* Comentários */
#comentario {
    flex: 1;                      /* Ocupa a outra parte do espaço */
    padding: 20px;
    background-color: var(--black-color-light);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 6px solid rgba(233, 41, 41, 0.5);
}

/* Estilos do formulário */
.forum form {
    display: flex;
    flex-direction: column;
}

.forum label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #ffffffd1;
    padding-bottom: 10px;
}

.forum input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.forum button {
    padding: 10px 15px;
    background-color: rgba(233, 41, 41, 0.5);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
}

.forum button:hover {
    background-color: #ad3d3d;
}

/* Estilos dos comentários (Card) */
.forum .card {
    margin-top: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border: 1px solid white;
    gap: 10px;
    display: flex;
    flex-direction: column;
}

.forum .card img {
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 20px;
}

/* Título */
h1 {
    color: white;
    margin: 20px;
    text-align: center;
    font-size: 40px;
    font-family: "Audiowide", sans-serif;
}

/* Estilos para o vídeo */
.video {
    width: 100%;                   
    margin-top: 20px;
    border-radius: 8px;
    border:6px solid rgb(143, 9, 9) ;
}

.video iframe {
    width: 100%;                   
    height: 500px;
    
}

.text{
    background-color: rgba(0, 0, 0, 0.8) ;
    margin: 1px;
    padding: 15px;
}



`

const Forum = () => {

    let { id } = useParams();
    const [forum, setForum] = useState({
        id,
        nome: '',
        email: '',
        descricao: '',

    });

    const handleChange = (e) => {
        setForum({ ...forum, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();
        fetch(`http://localhost:5000/forum${id ? id : ''}`, {
            method: "post",
            headers: {
                'Content-type': 'application/json',
            },
            //prepara para receber os dados em json
            body: JSON.stringify(forum),
            //então se estiver tudo certo ele direciona para o componente que deseja
        }).then(() => {
            // navigate("/listarUsuarios")
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/forum${id}`)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    setForum(data);
                })
        }
        //retorna um array vazio
    }, [])



    return (
        <MainForum>
            <section className='forum-container'>

                {/* Formulário e vídeo juntos */}
                <div className='forum-and-video'>
                    <div className='forum' id='form'>
                        <h1>Fórum</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nome">Nome
                                <input type="text" name='nome' value={forum.nome} onChange={handleChange} />
                            </label>

                            <label htmlFor="email">Email
                                <input type="text" name='email' value={forum.email} onChange={handleChange} />
                            </label>

                            <label htmlFor="descricao">Deixe um comentario
                                <input type="text" name='descricao' value={forum.descricao} onChange={handleChange} />
                            </label>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                    {/* Vídeo logo abaixo do formulário */}
                    <div className='video'>
                        <h1 className='text'>Assista Ao vivo</h1>
                        <iframe src="https://www.youtube.com/embed/odGD7rMRqJQ?si=v5_Ef1KFAgVh6G6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Comentários ao lado do formulário e vídeo */}
                <div className='forum' id='comentario'>
                    <h1>Comentarios</h1>
                    <Card />
                </div>

            </section>
        </MainForum>



    )
}

export default Forum