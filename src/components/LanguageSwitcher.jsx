import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

export default function LanguageSwitcher({ setLanguage, language }) {

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
       <Box sx={{ width: { xs: 125, sm: 150, md: 200, lg: 250, xl: 300 } }}>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Language / Dil</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          label="Language / Dil"
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="tr">Türkçe</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
