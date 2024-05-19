import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProduct } from '../../context/ProductContext';

export default function FilterByColor() {

    const {filterByColor} = useProduct()

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Colors</FormLabel>
      <RadioGroup
      onChange={(e) => filterByColor("color", e.target.value)}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="allcolors" control={<Radio />} label="All colors" />
        <FormControlLabel value="white" control={<Radio />} label="White" />
        <FormControlLabel value="black" control={<Radio />} label="Black" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="grey" control={<Radio />} label="Grey" />
      
      </RadioGroup>
    </FormControl>
  );
}
