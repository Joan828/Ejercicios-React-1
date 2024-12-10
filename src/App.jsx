import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Persona from './Components/Persona/Persona'

function App() {
  const dishes = [
    {
      id:1,
      name:'Plato 1',
      description:'Arroz con menestra, guatita y encebollado',
      price:10
    },
    {
      id:2,
      name:'Plato 2',
      description:'Salmón a la plancha con arroz y espárragos',
      price:20
    },
    {
      id:3,
      name:'Plato 3',
      description:'Solomillo de cordero al horno con costra verde y chalotas',
      price:15
    }
  ]

  return (

    <div>
    <Header/>
    <Home dishes={dishes}/>
    <Persona name="Joan" surname="Martínez" age={23}/>
    <Persona name="Jose" surname="Vega" age={65}/>
    <Persona name="Alberto" surname="Darditos" age={25}/>
  </div>

  )
}

export default App
