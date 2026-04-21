import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prevContador => prevContador + 1);
    };

    const decrementar = () => {
        setContador(prevContador => prevContador - 1);
    };

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default Contador;