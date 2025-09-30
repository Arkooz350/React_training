import { Label } from "@/components/ui/label";
import { useState } from "react";
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

function SelectGroupCustum() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { car, city, changer } = UseDataHooks();
  const handleChange = (value1 = car) => {
    const onReivedata = { ...changer, value1 };
    console.log(onReivedata);
    return;
  };

  const handleChange2 = (value2 = city) => {
    const data = { ...changer, value2 };
    console.log(data);
    return;
  };
  return (
    <>
      <div className=" inline-flex  bg-blue-600  justify-items-start m-15 rounded-2xl h-100 w-350 ">
        <form typeof="submit" className=" grid m-10 p-5">
          <Select onValueChange={handleChange}>
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
          <Select onValueChange={handleChange2}>
            <SelectTrigger className="w-[180px]">
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
            <Label htmlFor="spanInput1"> Nom </Label>
            <Input
              className="w-[180px]"
              id="spanInput1"
              placeholder="Entrer votre nom ! "
            ></Input>
          </span>
          <br />
          <Calendar24></Calendar24>
          <br></br>
          <button
            className="bg-amber-400 text-center rounded-2xl text-gray-950 italic hover:underline "
            type="submit"
          >
            Cliquez ici{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default SelectGroupCustum;
