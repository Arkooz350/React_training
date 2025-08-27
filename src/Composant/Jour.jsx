import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Jour = () => {
  const handleChange = (event) => {
    // console.log(event.target.value);
    const saveNumber = event.target.value;
    console.log(saveNumber)
    function EnvoieNumber(saveNumber) {
      
    }
  };
  return (
    <div>
      <InputLabel style={{ display: "flex", marginTop: "15px" }}>
        Combien de jour{" "}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        required={true}
        onChange={handleChange}
        defaultValue={1}
        style={{ display: "flex" }}
      >
        <MenuItem value="1"> 1 Jour</MenuItem>
        <MenuItem value="2"> 2 Jours</MenuItem>
        <MenuItem value="3"> 3 Jours</MenuItem>
        <MenuItem value="4"> 4 Jours</MenuItem>
        <MenuItem value="5"> 5 Jours</MenuItem>
      </Select>
    </div>
  );
};

export default Jour;
