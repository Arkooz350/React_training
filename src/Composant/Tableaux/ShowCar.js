import peugeot from "../../assets/Peugeot.jpg";
import toyota from "../../assets/Toyota.jpg";
import citroen from "../../assets/citroen.jpeg";

export const car = [
  {
    src: peugeot,
    id: 1,
    alt: "Peugeot",
    carac: `Basé sur la plateforme de l'Expert
 Compact (4,60 m), Standard (4,95 m), Long (5,30 m)
Capacité : 8 ou 9 places selon la configuration
Portes coulissantes latérales
Sièges modulables et amovibles `,
  },
  {
    src: toyota,
    id: 2,
    alt: "Toyota",
    carac: `Longueurs : Compact (4,60 m), Medium (4,95 m), Long (5,30 m)
Configurations : 7, 8 ou 9 places
Motorisations diesel et électrique
Basé sur la plateforme partagée avec Peugeot Traveller/Citroën SpaceTourer`,
  },
  {
    src: citroen,
    id: 3,
    alt: "Citroen",
    carac: `Versions : XS (4,60 m), M (4,95 m), XL (5,30 m)
Configurations : 7, 8 ou 9 places
Basé sur la même plateforme que le Peugeot Traveller et Toyota Proace Verso`,
  },
];
