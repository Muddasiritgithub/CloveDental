import React from 'react'
import { Container, Typography, TextField, Button ,Box,Grid} from '@mui/material';
 
function ButtonOne(props) {

    const {onClick,btnText="btnText"} = props

  return (
   <Button
   type="button"
   variant="contained"
   onClick={onClick}
   sx={{
    width:"100%",
    height:"56px",
    borderRadius:"10px",
     fontFamily:"Livvic-Medium",
    color:"#ffffff",
    textTransform:"capitalize"
}}
   >
{btnText}
   </Button>
  )
}

export default ButtonOne