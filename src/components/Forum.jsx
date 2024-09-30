import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Card from './Card';
import styled from 'styled-components';

const MainForum = styled.main`

.forum-container {
    display: flex;           
    justify-content: space-between; 
    gap: 20px;               
    flex-wrap: wrap;       
    margin: 30px;
}

.forum {
    width: 48%;              
    padding: 20px;
    background-color: var(--black-color-light);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-grow: 0;
}

#comentario {
    flex-grow: 1; 
}

#form {
    height: 30%;
}


.forum form {
    display: flex;
    flex-direction: column;
}

.forum label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #fff;
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

.forum .card {
    margin-top: 20px;
    color: #fff;
    padding: 20px;
    border: 1px solid white;
    gap: 15px;
    display: flex;
    flex-direction: column-reverse;
}


h1 {
    color: white;
    margin: 20px;
    text-align: center;
    font-size: 40px;
    
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

                <div className='forum' id='comentario'>
                    <h1>Comentarios</h1>
                    <Card />
                </div>
            </section>
        </MainForum>


    )
}

export default Forum