import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from '../components/Card';
import styled from 'styled-components';

const MainForum = styled.main`
    .forum-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin: 30px;
        flex-wrap: wrap;
        width: 98%;
    }

    .forum-and-video {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    #form, #comentario {
        padding: 20px;
        background-color: var(--black-color-light);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 6px solid rgba(233, 41, 41, 0.5);
        flex: 1;
        min-width: 300px; /* Adicionado para garantir um tamanho mínimo */
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
        border: 6px solid rgb(143, 9, 9);
    }

    .video iframe {
        width: 100%;
        height: 500px;
    }

    .text {
        background-color: rgba(0, 0, 0, 0.8);
        margin: 1px;
        padding: 15px;
    }

    /* Media Queries para responsividade */
    @media (max-width: 768px) {
        .forum-container {
            flex-direction: column; /* Coloca os elementos em coluna em telas menores */
            margin: 10px; /* Reduz a margem */
        }

        .forum-and-video {
            width: 100%; /* Garante que ocupe toda a largura */
        }

        #form, #comentario {
            margin: 10px 0; /* Margens verticais menores */
        }

        h1 {
            font-size: 30px; /* Tamanho do título reduzido */
        }
        
        .video iframe {
            height: 300px; /* Altura do vídeo ajustada para telas menores */
        }
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
        e.preventDefault();
        fetch(`http://localhost:5000/forum${id ? id : ''}`, {
            method: "post",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(forum),
        }).then(() => {
            // navigate("/listarUsuarios")
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/forum${id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setForum(data);
                });
        }
    }, [id]);

    return (
        <MainForum>
            <section className='forum-container'>
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

                    <div className='video'>
                        <h1 className='text'>Assista Ao vivo</h1>
                        <iframe src="https://www.youtube.com/embed/odGD7rMRqJQ?si=v5_Ef1KFAgVh6G6q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className='forum' id='comentario'>
                    <h1>Comentários</h1>
                    <Card />
                </div>
            </section>
        </MainForum>
    );
}

export default Forum;
