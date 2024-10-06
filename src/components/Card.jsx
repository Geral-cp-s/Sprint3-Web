import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainCard = styled.main`
.item {
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */
}

.item img {
  margin-right: 20px; /* Adiciona um espaço à direita da imagem */
  width: 50px; /* Ajusta o tamanho da imagem, se necessário */
  height: 50px;
}

.item p {
  margin: 0; /* Remove a margem padrão dos parágrafos */
}

`

const Card = () => {
    const [forum, setForum] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/forum/')
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setForum(data.reverse());
            })

        //retorna um array vazio
    }, [])


    return (
        <MainCard>
            <div>
                {forum.map((item, index) => (
                    <div className='card' key={index}>
                        <p className="item">
                            <img src="/img/9055969781537356155-128.png" alt="" />
                            {item.nome}
                        </p>
                        <p>Email: {item.email}</p>
                        <p>Comentario: {item.descricao}</p>

                    </div>
                ))}
            </div>
        </MainCard>
    )
}

export default Card