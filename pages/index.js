
import React from 'react';
import { useState } from 'React';

function Home(){
    return (
    <div>
        <h1>Home</h1>
        <Contador />          
     </div>
    )
} /// Função Home

function Contador(){
    const [contador, setContador] = useState([1]);
    function adicionarCont(){
        setContador(contador + 1);
    }/// Função adicionarCont

    return(
        <div>{contador}
        <button  onClick={adicionarCont}>Adicionar</button>
        </div>
    )// return
}// função Contador

export default Home