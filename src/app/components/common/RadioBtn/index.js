import React from 'react';
import { Box, Typography, FormControlLabel, Radio } from '@mui/material';
import Image from 'next/image';
 
const RadioBtn = ({ value, iconSrc, label, selectedOption, handleRadioChange }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%',  },
        border: `1px solid #EAE6E3`,
        borderRadius: '5px',
        pl: 1,
        transition: 'border-color 1s ease',
      }}
    >
      <FormControlLabel
        value={value}
        sx={{ width: '100%' }}
        control={<Radio checked={selectedOption === value} onChange={handleRadioChange} />}
        label={
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image src={iconSrc} alt={`${label} Icon`} />
            <Typography sx={{ fontFamily: 'Livvic-Semibold' }}>{label}</Typography>
          </Box>
        }
      />
    </Box>
  );
};
export default RadioBtn;
