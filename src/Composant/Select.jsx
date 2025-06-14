import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl className="Select" fullWidth>
        <InputLabel id="demo-simple-select-label">
          Choisie ton véhicule
        </InputLabel>
        <Select
          required={true}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Peugeot">Peugeot</MenuItem>
          <MenuItem value="Citroen">Citroen</MenuItem>
          <MenuItem value="Toyota">Toyota</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
