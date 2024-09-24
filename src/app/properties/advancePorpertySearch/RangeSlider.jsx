import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}

export default function RangeSlider({ value, onChange }) {
  return (
    <Box sx={{ width: 510 }}>
      <h1 className="w-1/2 md:w-full">Price range: $ 180000 to $ 1,800,000</h1>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1800000}
        step={100}
        className="flex flex-1 w-2/5 lg:w-full"
      />
    </Box>
  );
}
