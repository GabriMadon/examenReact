import React, { createContext, useContext, useState, type PropsWithChildren } from 'react'

interface semaforoEstado  {
    color:  string;
    cambiarColor: (color: string) => void;
};

//Creamos el contexto
export const SemaforoContext =  createContext({}as semaforoEstado);

export const useSemaforoEstado = () => useContext(SemaforoContext);

//Creamos el proveedor del contexto

export const SemaforoProvider = ({ children }: PropsWithChildren) => {
// Estado inicial del semáforo
//  useState para manejar el color del semáforo /rojo por defaul
    const [color, setColor] = useState('rojo');


// Función para cambiar el color del semáforo
    const cambiarColor = (nuevoColor: string) => {
        setColor(nuevoColor);
    };

    return (
        <SemaforoContext.Provider value={{ color, cambiarColor }}>
            {children}
        </SemaforoContext.Provider>
    );
}

