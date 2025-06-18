import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import FirstDiv from "./FirstDiv";
import { useEffect } from "react";

export default function BasicSelect() {
  const [vehicule, setvehicule] = useState("");
  const handleChange = (event) => {
    setvehicule(event.target.value);
    const VIH = <Select vehicule={vehicule}></Select>;
    console.log(event.target.value)
    
  };
  return (
    <div>
      <InputLabel style={{ display: "flex", marginTop: "15px" }}>
        Chosse your car{" "}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        required={true}
        onChange={handleChange}
        defaultValue="Peugeot"
        style={{ display: "flex" }}
      >
        <MenuItem value="Citroen"> Citroen</MenuItem>
        <MenuItem value="Toyota"> Toyota</MenuItem>
        <MenuItem value="Peugeot"> Peugeot</MenuItem>
      </Select>
    </div>
  );
}
