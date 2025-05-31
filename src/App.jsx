
import './App.css'

import { useState } from "react"

function Menu (){
  const [ nom , setNom ] = useState(1);
  const HandleClick = () =>{
    setNom (nom +1 )
    console.log(nom)
  }
  const [retire , SetRetire] = useState()
  const retirevalue = (el) => {
    SetRetire (setNom = -1)
console.log(nom)
  }

  return <div>
    <h1>Bonjour</h1>
    <nav>
      <h2> Nombre ajouter :{nom}</h2>
      <h2> Nombre enlever :{retire}</h2>

      <button onClick={HandleClick} id='btn1'>Ajouter</button>
      <button  onClick= {retirevalue} id='btn2'>Retirer</button>
      <button id='btn3'>Mulitiplier X 2</button>
    </nav>
    <ul id ="listemenu">
      <li>Service</li>
      <li>A propos</li>
      <li>Nous contacter</li>
    </ul>

    
    </div>
}


export default Menu;
