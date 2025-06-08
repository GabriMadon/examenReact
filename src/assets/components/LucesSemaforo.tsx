import { useSemaforoEstado } from "../context/SemaforoContext";

export const LucesSemaforo = () => {
  const { color } = useSemaforoEstado();

  const claseRojo = color === "rojo" ? "bg-red-500" : "bg-gray-400";
  const claseAmarillo = color === "amarillo" ? "bg-yellow-500" : "bg-gray-400";
  const claseVerde = color === "verde" ? "bg-green-500" : "bg-gray-400";

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-16 h-16 rounded-full ${claseVerde
          }`}
        ></div>
        <div
          className={`w-16 h-16 rounded-full ${claseAmarillo }`}
        ></div>
        <div
          className={`w-16 h-16 rounded-full ${
            claseRojo
          }`}
        ></div>
      </div>
    </>
  );
};
