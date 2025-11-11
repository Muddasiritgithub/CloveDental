import React from "react";
import Vector from "../../../../public/assets/Images/Vector.png";
import { Box, Card, Grid, Typography, Button,useMediaQuery } from "@mui/material";
import Image from "next/image";
import dateIcon from "../../../../public/Assets/Images/dateIcon.svg";
import medIcon from "../../../../public/Assets/Images/medIcon.svg";
import mailIcon from "../../../../public/Assets/Images/mailIcon.svg";
 import Link from 'next/link';


const Index = () => {
   const isMobile = useMediaQuery('(max-width:600px)');
  const marginLeft = isMobile ? "0px" : "20px";

  return (
    <>
      <Card variant="outlined" sx={{ padding: isMobile ? "0" : "20px", ...marginLeft,borderRadius:"16px"}}>
      <Box>
          <Box sx={{ textAlign: "center" }}>
            <Image src={Vector} />
            <Typography variant="h5" sx={{fontFamily:"Livvic-Semibold"}}>Appointment Successful </Typography>
            <Typography sx={{fontFamily:"Livvic-Regular"}}>
              Please review your appointment details from the appointment menu
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2} justifyContent="center" mt={5}>
          <Grid item xs={12} md={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1845898086426!2d74.2427086739731!3d31.35388505535147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018bb54e4247%3A0x5d51537bf5a7f0aa!2sProspiral!5e0!3m2!1sen!2s!4v1717390907783!5m2!1sen!2s"
              width="100%"
              height="178px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Link href="https://www.google.com/maps/place/Prospiral/@31.353881,74.245284,15z/data=!4m6!3m5!1s0x3919018bb54e4247:0x5d51537bf5a7f0aa!8m2!3d31.3538805!4d74.2452836!16s%2Fg%2F11fl4b0x9w?hl=en&entry=ttu">
            <Box sx={{ textAlign: "center", marginTop: 4 }}>
              <Button variant="outlined" sx={{fontSize:"12px",width:"300px",height:"39px",fontFamily:"Livvic-Medium"}}>View Location</Button>
            </Box>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mt: { xs: 3, md: 0 } }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ borderRadius: "16px", border: "1px solid #EEEEEE", width: "220px",padding:"5px 10px" }}>
                  <Box sx={{ display: "flex", gap: 2}}>
                    <Image src={medIcon} />
                    <Typography sx={{fontFamily:"Livvic-Semibold"}}>Visit Reason</Typography>
                  </Box>
                  <Typography sx={{fontFamily:"Livvic-Regular"}}>Follow up</Typography>
                </Box>
                <Box sx={{ width: "220px", minHeight: "60px", mt: 1, borderRadius: "16px", border: "1px solid #EEEEEE", marginTop: 4,padding:"5px 10px" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Image src={dateIcon} />
                    <Typography sx={{fontFamily:"Livvic-Semibold"}}>Time & Date</Typography>
                  </Box>
                  <Typography sx={{fontFamily:"Livvic-Regular"}}>Tuesday, 03, 27, 11:00 AM</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: 5 }}>
              <Link href="/AppointmentCurrent">
              <Button variant="contained" sx={{height:"56px",width:"187px",fontSize:"12px",fontFamily:"Livvic-Medium"}}>Confirm Appointment</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mt: { xs: 3, md: 0 } }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ borderRadius: "16px", border: "1px solid #EEEEEE", width: "220px",padding:"5px 10px"}}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Image src={mailIcon} />
                    <Typography sx={{fontFamily:"Livvic-Semibold"}}>Email Address</Typography>
                  </Box>
                  <Typography sx={{fontFamily:"Livvic-Regular"}}>Simon_Reilly61@gmail.com</Typography>
                </Box>
                <Box sx={{ width: "220px", minHeight: "60px", marginTop: 4, borderRadius: "16px", border: "1px solid #EEEEEE",padding:"5px 10px" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Image src={mailIcon} />
                    <Typography sx={{fontFamily:"Livvic-Semibold"}}>Phone No.</Typography>
                  </Box>
                  <Typography sx={{fontFamily:"Livvic-Regular"}}>618-901-1281 x89476</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: 5 }}>
              <Button variant="outlined" sx={{height:"56px",width:"187px",fontSize:"12px",fontFamily:"Livvic-Medium"}}>Back to Home</Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Index;
