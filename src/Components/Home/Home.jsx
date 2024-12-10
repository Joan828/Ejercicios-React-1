import Header from "../Header/Header"
import "./Home.css"

const Home = (props) => {
  return (
    <Header/>,
    <div>
      {props.dishes.map(dish=>{
        return (
          <div key={dish.id} className="plato">
            <p className="nomPlato">{dish.name}</p>
            <p className="descPlato">{dish.description}</p>
      </div>
      
      )
      })}
    </div>
)
}

export default Home

  