import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}

export default function RangeSlider({ value, onChange }) {
  return (
    <Box sx={{ width: '100%' }}>
      <h1 className="text-lg md:text-xl">Price range: ${value[0]} to ${value[1]}</h1>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1800000}
        step={100}
        sx={{
          width: '100%',
          marginTop: 2,
          '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            '&:hover, &.Mui-focusVisible': {
              boxShadow: 'inherit',
            },
          },
        }}
      />
    </Box>
  );
}
