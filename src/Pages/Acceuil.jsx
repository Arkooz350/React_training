import React, { useState } from "react";
import Nav from "../Composant/Nav";
import Formular from "../Composant/Formular";

function Acceuil() {
  const [pers, SetPers] = useState({
    nom: "toto",
    prenom: "titi",
    age: 25,
    genre: "M",
  });
  const handleclickpers = () => {
    SetPers({ ...pers, age: pers.age + 1 });
  };
  return (
    <div className="SectionAcceuil">
      <Nav />
      <h1>Bienvenue ! </h1>
      <div>
        <button onClick={handleclickpers}>Ajouter + 1 a votre age</button>
        <p className="paragrapheChiffre">{pers.age}</p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
        <Formular />
  
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus
        tempora quod deleniti aspernatur, ipsum eligendi atque excepturi
        reprehenderit libero quasi repellendus ratione beatae adipisci iure vero
        rerum alias facere sunt deserunt unde dolor. Aperiam error, odit ratione
        ex provident quibusdam ipsam delectus neque at laudantium nihil non
        ullam nemo aut quo cumque saepe ut corporis voluptatem temporibus
        blanditiis rerum dicta corrupti odio! Error doloremque tenetur minus hic
        atque odit corporis iure, labore ipsum voluptate recusandae aliquid,
        alias unde vero quo, obcaecati laboriosam omnis. Molestias tempore
        necessitatibus ex modi autem veniam rem pariatur saepe deserunt error.
        Autem, corporis doloremque accusamus consectetur recusandae quaerat,
        officia quas, a necessitatibus ut ratione voluptate asperiores sapiente?
        Id, animi doloribus minus nobis quia debitis cupiditate veritatis
        dolorem, deleniti, ad molestias iusto voluptatem aspernatur ratione
        ipsum numquam. Dicta ut dolor obcaecati, magni enim cupiditate culpa
        dignissimos cum repellendus vitae tempore quidem? Modi quaerat
        laboriosam tempore earum natus aliquid minus ipsa mollitia dolor
        obcaecati, similique fugiat sunt placeat a maxime cum voluptatibus
        adipisci excepturi et unde corporis, sed, quis aperiam. Vitae,
        recusandae facilis ut animi, dolores illo laudantium tempora porro
        beatae praesentium itaque quae neque nulla eos deserunt sunt
        exercitationem optio sed. Ullam iste et sed tempore.
      </p>
    </div>
  );
}

export default Acceuil;
