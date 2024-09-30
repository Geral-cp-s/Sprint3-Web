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
                    <p>nome: {item.nome}</p>
                    <p>email: {item.email}</p>
                    <p>descricao: {item.descricao}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Card