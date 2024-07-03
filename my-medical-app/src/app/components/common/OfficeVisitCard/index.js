import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
 
const OfficeVisitCard = ({ href, iconSrc, text, arrowIconSrc }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', width: '48%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding:"14px",
          border: '1px solid #EAE6E3', 
          borderRadius: '7px',
           
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' , color: '#000', // Set the color to black
        fontSize: '16px',}}>
          <Image src={iconSrc} alt={`${text} Icon`} />
          <Typography sx={{ fontFamily: 'Livvic-Semibold', marginLeft: 1, }}>
            {text}
          </Typography>
        </Box>
        <Box sx={{}}>
          <Image src={arrowIconSrc} alt="Arrow Right Icon" />
        </Box>
      </Box>
    </Link>
  );
};



export default OfficeVisitCard;
