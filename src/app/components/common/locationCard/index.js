import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import locationImage from "../../../../../public/assets/Images/locationImage.png"
import dateIcon from "../../../../../public/assets/Images/dateIcon.svg"
import arrowRight from "../../../../../public/assets/Images/arrowRight.svg"
import arrowRightLarge from "../../../../../public/assets/Images/arrowRightLarge.svg"
import Image from 'next/image';

function LocationCard() {
  return (
    <Card variant="outlined" sx={{width:"100%", position:"relative",borderRadius:"10px" }}>
      
      <CardContent sx={{mt:1}}>
        <Box sx={{display:"flex",gap:'10px',alignItems:"center"}}>
        <Image src={locationImage}/>
        <Box>
        <Typography sx={{fontSize:16,fontFamily:"Livvic-Semibold"}}>
        Location Name
        </Typography>
        <Typography sx={{fontSize:12,fontFamily:"Livvic-Regular"}}>
        192 9th Street, Monahanville 94674-3137
        </Typography>
        </Box>
        </Box>
        <Box sx={{position:"absolute",top:"20px",right:"10px"}}><Image src={arrowRightLarge}/></Box>

        <Box sx={{display:"flex",gap:1,mt:3}}>
        <Image src={dateIcon}/>
        <Typography sx={{fontSize:16,fontFamily:"Livvic-Semibold"}} >
        Time & Date        
        </Typography>
        </Box>
        <Typography sx={{fontSize:12,fontFamily:"Livvic-Regular"}}>Tuesday, February 27, 11:00 AM</Typography>
      </CardContent>
      <Box sx={{display:"flex",justifyContent:"center",gap:1,borderRadius:"10px",pb:2}}>
        <Button sx={{textTransform:"capitalize",width:"45%",borderRadius:"10px",fontSize:12,color:"#000000",border:"1px solid #C4C4C4",fontFamily:"Livvic-Semibold"}} variant='outlined'>Cancel</Button>
        <Button sx={{textTransform:"capitalize",width:"45%",borderRadius:"10px",fontSize:12,backgroundColor:"#284473",fontFamily:"Livvic-Semibold","&:hover": {
      backgroundColor: "#285b73",
    },}} variant='contained'>Reschedule</Button>
    </Box>   
         </Card>
  );
}

export default LocationCard;