import './App.css'
import Persona from './Components/Persona/Persona'

function App() {
  return (

      <div>
        <Persona name="Joan" surname="Martínez" age={23}/>
        <Persona name="Jose" surname="Vega" age={65}/>
        <Persona name="Alberto" surname="Darditos" age={25}/>
      </div>

  )
}

export default App
