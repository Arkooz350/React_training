import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function BasicSelect() {
 const [time, settime] = useState('')

  const handleChange = (event) => {
    settime(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Heure </InputLabel>
        <Select style={{display:"list-item"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"00:00"}>Ten</MenuItem>
          <MenuItem value={"02:00"}>Twenty</MenuItem>
          <MenuItem value={"03:00"}>Twenty</MenuItem>
          <MenuItem value={"04:00"}>Twenty</MenuItem>
          <MenuItem value={"05:00"}>Twenty</MenuItem>
          <MenuItem value={"06:00"}>Twenty</MenuItem>
          <MenuItem value={"07:00"}>Twenty</MenuItem>
          <MenuItem value={"08:00"}>Twenty</MenuItem>
          <MenuItem value={"09:00"}>Twenty</MenuItem>
          <MenuItem value={"10:00"}>Twenty</MenuItem>
          <MenuItem value={"11:00"}>Twenty</MenuItem>
          <MenuItem value={"12:00"}>Twenty</MenuItem>
          <MenuItem value={"00:00"}>Ten</MenuItem>
          <MenuItem value={"02:00"}>Twenty</MenuItem>
          <MenuItem value={"03:00"}>Twenty</MenuItem>
          <MenuItem value={"04:00"}>Twenty</MenuItem>
          <MenuItem value={"05:00"}>Twenty</MenuItem>
          <MenuItem value={"06:00"}>Twenty</MenuItem>
          <MenuItem value={"07:00"}>Twenty</MenuItem>
          <MenuItem value={"08:00"}>Twenty</MenuItem>
          <MenuItem value={"09:00"}>Twenty</MenuItem>
          <MenuItem value={"10:00"}>Twenty</MenuItem>
          <MenuItem value={"11:00"}>Twenty</MenuItem>
          <MenuItem value={"12:00"}>Twenty</MenuItem>
    
        </Select>
      </FormControl>
    </Box>
  );
}
