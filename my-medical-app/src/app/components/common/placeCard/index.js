import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import placeImage from "../../../../../public/assets/Images/placeImage.png"
import pointerIcon from "../../../../../public/assets/Images/pointerIcon.svg"
import Image from 'next/image';

function PlaceCard() {
  return (
    <Card variant="outlined" sx={{width:"100%",position:"relative",borderRadius:"10px" }}>
       <Box sx={{p:1,py:2,pt:2,pb:1}}>
        <Box sx={{textAlign:"center"}}>
        <Image src={placeImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} width="100%" height="100%"/>
        </Box>
        <Box sx={{display:"flex",gap:1,mt:3}}>
        <Image src={pointerIcon}/>
        <Typography sx={{fontSize:16,fontFamily:"Livvic-Semibold"}} >
        Name of the Place        
        </Typography>
        </Box>
        <Typography sx={{fontSize:10,fontFamily:"Livvic-Regular"}}>1.2km</Typography>
        <Typography sx={{fontSize:16,fontFamily:"Livvic-Regular"}}>192 9th Street, Monahanville 94674-3137</Typography>
        </Box>         
        </Card>
  );
}

export default PlaceCard;