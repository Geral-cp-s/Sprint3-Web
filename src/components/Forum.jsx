import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Card from './Card';
import "../estilo.css"



const Forum = () => {

    let {id} =useParams();
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
        <section className='forum'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome
                <input type="text" name='nome' value={forum.nome} onChange={handleChange} />
            </label>

            <label htmlFor="email">email
                <input type="text" name='email' value={forum.email} onChange={handleChange} />
            </label>

            <label htmlFor="descricao">descriçao
                <input type="text" name='descricao' value={forum.descricao} onChange={handleChange} />
            </label>
            <button>enviar</button>
        </form>
    
        <div>
            <Card/>
        </div>
        </section>

    )
}

export default Forum