
import './App.css'
import { SemaforoProvider } from './assets/context/SemaforoContext'
import { LucesSemaforo } from './assets/components/LucesSemaforo'
import BotonesSemaforo from './assets/components/BotonesSemaforo'

function App() {


  return (
    <SemaforoProvider>
      <p className="text-3xl font-bold  m-6">
        Examen React Semáforo
      </p>

      <LucesSemaforo/>
      <BotonesSemaforo/>


    </SemaforoProvider>
  )
}

export default App
