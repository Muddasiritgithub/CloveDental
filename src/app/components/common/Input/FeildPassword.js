import React, { useState } from 'react';
import { InputLabel, OutlinedInput, FormControl, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const FeildPassword = ({ label, type, value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prev) => !prev);
      };
    
    return (
      <FormControl key={showPassword} variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          required
          onChange={onChange}
          endAdornment={
            type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggleShowPassword}
                  edge="end"
                >
                  {showPassword ?  <VisibilityOffIcon/>:<Visibility/> }
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        //   InputProps={{ style: {backgroundColor:"#E9E5E2" } }}
             sx={{ 
                backgroundColor:"#E9E5E2",
                borderRadius:"10px",
            '& .MuiOutlinedInput-input': { 
              '&:-webkit-autofill': { 
                WebkitBoxShadow: '0 0 0 100px #E9E5E2 inset', 
                WebkitTextFillColor: 'default',
              },
            },
          }}
        />
      </FormControl>
    );
  };
  
  

export default FeildPassword;
