import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProduct } from '../../context/ProductContext';

export default function FilterProduct() {

    const { filterProduct } = useProduct()

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
      onChange={(e) => filterProduct("category", e.target.value)}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All categoryes" />
        <FormControlLabel value="ev" control={<Radio />} label="EV" />
        <FormControlLabel value="sedan" control={<Radio />} label="Sedan" />
        <FormControlLabel value="crossover" control={<Radio />} label="Crossover" />
        <FormControlLabel value="suv" control={<Radio />} label="SUV" />
        
      </RadioGroup>
    </FormControl>
  );
}
