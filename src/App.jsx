import './App.css'
import Persona from './Components/Persona/Persona'

function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]

  return (

      <div>
        <Persona name="Joan" surname="Martínez" age={23}/>
        <Persona name="Jose" surname="Vega" age={65}/>
        <Persona name="Alberto" surname="Darditos" age={25}/>
      </div>

  )
}

export default App
