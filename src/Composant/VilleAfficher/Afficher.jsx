import React from "react";
import Ville_a_decouvrire from "../../Pages/Ville_a_decouvrire";
import { useState } from "react";
import "../../Style/Button_Tower.css"


function ComposantA({ isVisible, onToggle }) {

  return (
    <div>
     
      <div>
        {isVisible && (
          <div   key={isVisible} className="DivTrueComposantA">
            <p>
           Paris, surnommée la "Ville Lumière", est la capitale romantique de la France et une destination incontournable pour les voyageurs du monde entier. <br></br> Cette métropole élégante séduit par ses monuments emblématiques comme la Tour Eiffel, l'Arc de Triomphe et la cathédrale Notre-Dame, ainsi que par ses musées de renommée mondiale tels que le Louvre et le musée d'Orsay.<br></br>
Flâner dans les quartiers historiques comme Montmartre avec sa basilique du Sacré-Cœur, se promener le long de la Seine ou déambuler sur les Champs-Élysées fait partie des plaisirs parisiens. La ville offre également une scène culinaire exceptionnelle, des cafés de quartier aux restaurants étoilés, sans oublier ses pâtisseries et boulangeries légendaires.<br></br>
Paris combine parfaitement histoire et modernité, avec ses larges boulevards haussmanniens, ses jardins comme le Luxembourg ou les Tuileries, et une vie culturelle intense entre théâtres, concerts et expositions. Chaque arrondissement a sa propre personnalité, du bohème Saint-Germain-des-Prés au branché Marais, offrant aux visiteurs une expérience riche et variée.
            </p>
          </div>
        )}
        <div>
        </div>
      </div>
    </div>
  );
}

export default ComposantA;
