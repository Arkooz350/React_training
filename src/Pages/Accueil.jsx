import React, { useEffect } from "react";
import Nav from "../Composant/Nav";
import Peugeot from "../assets/Peugeot.jpg";
import Citroen from "../assets/citroen.jpeg";
import Toyota from "../assets/Toyota.jpg";
import LoadingButtonGroup from "../Composant/Select";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { car } from "../Composant/Tableaux/ShowCar";
import ComposantCitroenAccueil from "../Composant/ComposantPageAcceuil/ComposantCar/ComposantCitroenAccueil";
import ShowPriceOpacity from "../Composant/ComposantPageAcceuil/ComposantCar/ShowPriceOpacity";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar24 } from "@/Composant/ComposantPageAcceuil/DateTimePicker";
import axios from "axios";

const Acceuil = () => {
  const [click, setclick] = useState();
  const [place, setplace] = useState("");
  const [selectcar, setselectcar] = useState("");
  const handleSelectCar = (event) => {
    setselectcar(event);
  };
  const handleSelectCity = (e) => {
    setplace(e);
  };

  return (
    <div
      className="divAcceuil"
      style={{ display: "inline-block", justifyItems: "center" }}
    >
      <Nav />
      <div className="AccIcon">
        <AccountBoxOutlinedIcon fontSize="large"> </AccountBoxOutlinedIcon>{" "}
        <li style={{ listStyle: "none" }}> Mon compte</li>
      </div>

      <div className="inline-block justify-center text-center mb-10 ">
        <div className="Test"></div>
        <h1 className=" inline-flex font-extrabold bg-gray-400 text-blue-800">
          Bienvenue sur votre solution de mobilité groupe !
        </h1>
        <p className="font-light italic leading-normal">
          Nous révolutionnons la location de véhicules spacieux en proposant des
          minibus 9 places neufs et parfaitement entretenus à des tarifs défiant
          toute concurrence.<br></br> Que ce soit pour un voyage en famille, une
          sortie d'entreprise ou un événement sportif,<br></br> nous avons la
          solution idéale pour vous.{" "}
        </p>
        <div className="allimage">
          {car.map((vehicle) => {
            return (
              <ComposantCitroenAccueil key={vehicle.id} vehicle={vehicle} />
            );
          })}
        </div>
        <div className="inline-flex w-150  bg-blue-800 mt-10 rounded-2xl">
          <div className=" flex m-10 m-auto-10">
            <Label htmlFor="place" className="px-1">
              <Select onValueChange={handleSelectCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Pick-up City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ville</SelectLabel>
                    <SelectItem value="Grigny">Grigny</SelectItem>
                    <SelectItem value="Paris">Paris</SelectItem>
                    <SelectItem value="La Ferté-sous-Jouarre">
                      La Ferté-sous-Jouarre
                    </SelectItem>
                    <SelectItem value="Évry">Évry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Label>
            <Select className=" " onValueChange={handleSelectCar}>
              <SelectTrigger className="justify-center" required={true}>
                <SelectValue placeholder="Choisse your car " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Peugeot"> Peugeot</SelectItem>{" "}
                  <SelectItem value="Citroen">Citroen </SelectItem>{" "}
                  <SelectItem value=" Toyota"> Toyota</SelectItem>{" "}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Calendar24></Calendar24>
          </div>
        </div>
      </div>

      <div className="allblock1" style={{ display: "flex", gap: "20em" }}>
        <div className="block1info"></div>
        <div className="block2conso"></div>
      </div>
      <p className="text-sm text-gray-500">SALMUT</p>
    </div>
  );
};

export default Acceuil;
