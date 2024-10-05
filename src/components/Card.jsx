import React, { useState,useEffect } from 'react';



const Card = () =>{
const [forum, setForum] = useState([]);
        
useEffect(()=>{
    fetch('http://localhost:5000/forum/')
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        setForum(data);
    })
    
    //retorna um array vazio
},[])

    
    return(
        <>
        <div>
            {forum.map((item,index)=>(
                <div className='card' key={index}>
                    <p>Nome: {item.nome}</p>
                    <p>Email: {item.email}</p>
                    <p>Comentario: {item.descricao}</p>
                    <img src="/img/9055969781537356155-128.png" alt="" />
                </div>
            ))}
        </div>
        </>
    )
}

export default Card