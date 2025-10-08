import { Label } from "@/components/ui/label";
import { useReducer, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Calendar24 } from "./DateTimePicker";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input.jsx";
import { UseDataHooks } from "@/hooks/UseDataHooks";
import ReducerRegister from "../Tableaux/ReducerRegister";
import TableData from "./ComposantCar/TableData";

function SelectGroupCustum() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const [state, dispatchEvent] = useReducer(ReducerRegister, {
    formDataArray: [],
  });

  const handleChange = (data) => {
    dispatchEvent({
      type: "ADD_TO_ARRAY",
      payload: {
        car: data.car,
        city: data.city,
        name: data.name,
      },
    });
    reset(); // Réinitialise le formulaire après soumission
    console.log("Tableau de données:", state.formDataArray);
  };

  return (
    <>
      <div className="inline-flex bg-blue-600 justify-items-start m-15 rounded-2xl h-100 w-350">
        <form onSubmit={handleSubmit(handleChange)} className="grid m-10 p-5">
          <Select
            id="car"
            {...register("car", {
              required: "Merci de choisir un van ",
            })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selectionez une voiture ! " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Peugeot">Peugeot</SelectItem>
              <SelectItem value="Citroen">Citroen</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
            </SelectContent>
          </Select>
          <br />
          <Select
            {...register("city", {
              required: "Merci de choissir une ville",
            })}
          >
            <SelectTrigger id="city" className="w-[180px]">
              <SelectValue placeholder="Selectinez votre votre ville " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Grigny">Grigny</SelectItem>
              <SelectItem value="Ris-Orangis">Ris-Orangis</SelectItem>
              <SelectItem value="Evry">Evry</SelectItem>
              <SelectItem value="Meaux">Meaux</SelectItem>
            </SelectContent>
          </Select>
          <br />
          <span id="spanInput1">
            <Label htmlFor="spanInput1">Nom</Label>
            <Input
              {...register("name", {
                required: "Le nom est requis",
              })}
              className="w-[180px]"
              id="spanInput1"
              placeholder="Entrer votre nom ! "
            />
          </span>

          <Calendar24></Calendar24>
          <br></br>
          <button
            className="bg-amber-400 text-center rounded-2xl text-gray-950 italic hover:underline "
            type="submit"
          >
            Cliquez ici{" "}
          </button>
        </form>
        <div>
          <TableData></TableData>
        </div>
      </div>
    </>
  );
}

export default SelectGroupCustum;
