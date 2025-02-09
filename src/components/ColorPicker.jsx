import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { SketchPicker } from "react-color";

export default function ColorPicker({ navcolor,setnavColor}) {
  const [color, setColor] = useState(navcolor);
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    setnavColor(newColor.hex);
    if (onChange) onChange(newColor.hex);
  };

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
     
      <TextField
        label="Navbar Rengi Seç"
        value={color}
        onClick={() => setShowPicker(!showPicker)}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: color,
                borderRadius: "50%",
                display: "inline-block",
                marginRight: 1,
                border: "1px solid #ccc",
              }}
            />
          ),
        }}
        fullWidth
      />

    
      {showPicker && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            mt: 1,
            boxShadow: 3,
          }}
        >
          <SketchPicker color={color} onChange={handleChange} />
        </Box>
      )}
    </Box>
  );
}
