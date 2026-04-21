
import React, { createContext, useEffect, useState } from "react";

// CONTEXTO DE REACT: Crear el contexto que compartirá datos entre componentes
// createContext() crea un objeto de contexto que permite pasar datos a través del árbol de componentes
// sin tener que pasar props manualmente en cada nivel
export const DataContext = createContext();

// PROVIDER DEL CONTEXTO: Componente que provee los datos a sus componentes hijos
export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error("Error fetching products:", err))
    }, [])


    // CONTEXTO DE REACT: El Provider hace disponible el valor { data, setData }
    // a todos los componentes descendientes que consuman este contexto
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
