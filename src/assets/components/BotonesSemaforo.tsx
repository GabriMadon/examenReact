import { useSemaforoEstado } from "../context/SemaforoContext";

export default function BotonesSemaforo() {
  const { cambiarColor } = useSemaforoEstado();

  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-6 py-3 rounded-lg font-bold text-white bg-green-500 hover:bg-gray-600"
          onClick={() => cambiarColor("verde")}
        >
          Verde
        </button>
        <button
          className="px-6 py-3 rounded-lg font-bold text-white bg-yellow-500 hover:bg-gray-600"
          onClick={() => cambiarColor("amarillo")}
        >
          Amarillo
        </button>
        <button
          className="px-6 py-3 rounded-lg font-bold text-white bg-red-500 hover:bg-gray-600"
          onClick={() => cambiarColor("rojo")}
        >
          Rojo
        </button>
      </div>
    </>
  );
}
