import React from 'react'
import './Persona.css'

const Persona = (props) => {
  return (
    <div>Esta persona tiene nombre: {props.name}, apellido: {props.surname} y una edad de {props.age} años.</div>
  )
}

export default Persona