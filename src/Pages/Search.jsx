import Nav from "../Composant/Nav"
import "../Style/search.css"

function Search () {
    return ( 
       <div style={{justifyItems : "center"}}>
        <Nav></Nav>
          <h2  id ="SecondTitle">Rechercher votre véhicule dans votre secteur  ! </h2>
        <div className="TextPart1" >
            <div className="SectionPageSearch1">
               <p>Nous mettons à votre disposition une flotte de vans 9 places récents, parfaitement entretenus et prêts à partir. Tous nos véhicules sont équipés pour vous offrir un maximum de confort : sièges spacieux, climatisation, grands coffres, options pratiques (GPS, connectivité, sièges enfants sur demande…), tout est pensé pour faciliter vos trajets, que vous partiez pour quelques heures ou plusieurs jours.</p>
            </div>
            <div className="SectionPageSearch2">
                <h2>🚐 Syncia Rent – La liberté de voyager ensemble, en toute sérénité.</h2>
            </div>
        </div>
       </div>
     );
}

export default Search ;