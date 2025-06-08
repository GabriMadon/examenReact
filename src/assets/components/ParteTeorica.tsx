//Parte 1: Teoría 
//1. ¿Qué hace el hook useState? Dé un ejemplo. 

//Permite manejar el estado en un componente funcional.
//Es util para almacenar y actualizar valores dinamicos dentro de un componente.
// Ejemplo:
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0); // Estado inicial en 0

  return (
    <>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
};
export default Contador;



//2. ¿Qué es un fragmento (<> </>) y para qué sirve?  

//Un fragmento es una forma de agrupar múltiples elementos sin añadir un nodo extra al DOM.
// Se utiliza para devolver múltiples elementos desde un componente sin necesidad de envolverlos en un contenedor adicional.    
//Ejemplo:

const MiComponente = () => {
  return (
    <> 
      <h1>Título</h1>
      <p>Descripción</p>
    </>
  );
};


//3. ¿Qué diferencia hay entre useContext y useState?  

//UseContext es un hook que permite acceder a un contexto creado con createContext, facilitando el paso de datos entre componentes sin necesidad de pasar props manualmente.
//Permite compartir informacion en toda la aplicaion

//UseState es un hook que permite manejar el estado local de un componente funcional, permitiendo almacenar y actualizar valores dentro del mismo componente.
//Controla valores internos de un componente

// Ejemplo de useContext:
const MiContexto = createContext();
const MiComponente = () => {
  const valor = useContext(MiContexto);// Accede al valor del contexto
  // El valor puede ser un objeto, una cadena, un número, etc.
  return <p>{valor}</p>; 
};


// Ejemplo de useState:
const Contador = () => {
  const [contador, setContador] = useState(0);// Estado inicial en 0
  return <button onClick={() => setContador(contador + 1)}>Incrementar</button>;
};


//4. ¿Cuál es la estructura básica de un componente funcional?  
//Un componente funcional es una función de JavaScript que retorna JSX para renderizr.
//Ejemplo:
const MiComponente = () => {
  return <h1>Hola, mundo!</h1>;
}