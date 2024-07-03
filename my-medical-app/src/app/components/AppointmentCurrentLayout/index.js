import { Grid, Box, Typography, Button, Card,useMediaQuery  } from "@mui/material";
import Image from "next/image";
import arrowForward from "../../../../public/Assets/Images/arrowForward.svg";
import dateIcon from "../../../../public/Assets/Images/dateIcon.svg";
import pointerIcon from "../../../../public/Assets/Images/pointerIcon.svg";
import Link from 'next/link';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const CurrentAppointmentLayout = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const appointment = [1, 2, 3];

  const cardSx = {
    marginLeft: isMobile ? 0 : "10px",  
    paddingLeft: isMobile ? 0 : "10px", 
   
  };
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <>
      <Box sx={{ display: "flex",  alignItems: "center", ...cardSx,paddingBottom:"10px" ,gap:"20px"}}>
      <ChevronLeftIcon
            onClick={handleGoBack}
            sx={{
              fontSize: 20,
              border: "2px solid #284473",
              borderRadius: "10px",
              padding: 1,
              color: "#284473",
              height: "22px",
              cursor: "pointer",
            }}
          />
        <Typography sx={{ fontSize: "24px", fontFamily: "Livvic-Semibold" }}>Current Appointments</Typography>
      </Box>
      <Card variant="outlined" sx={{ ...cardSx,borderRadius:"16px" }}>
        {appointment.map((item, index) => (
          <Grid container spacing={3} justifyContent="center" key={index}>
            <Grid item xs={12} md={8} lg={8} sx={{ margin: "10px 0" }}>
              <Box
                sx={{
                  borderRadius: "16px",
                  border: "1px solid #EEEEEE",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src={pointerIcon} alt="location" />
                  <Typography sx={{ fontSize: "16px", fontFamily: "Livvic-Semibold" }}>
                    Location Name
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "14px", fontFamily: "Livvic-Regular" }}>
                  192 9th Street, Monahanville 94674-3137
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: "16px",
                  border: "1px solid #EEEEEE",
                  marginTop: "16px",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Image src={dateIcon} alt="calendar" />
                  <Typography sx={{ fontSize: "16px", fontFamily: "Livvic-Semibold" }}>
                    Time & Date
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "14px", fontFamily: "Livvic-Regular" }}>
                  Tuesday, February 27, 11:00 AM
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2} sx={{ margin: "30px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Button
                variant="text"
                sx={{
                  marginBottom: "10px",
                  textTransform: "none",
                  display: "flex",
                  gap: "10px",
                  textAlign: "center",
                  width: "169px",
                  fontFamily: "Livvic-Medium",
                }}
              >
                <Typography sx={{ fontSize: 12 }}>View More</Typography>
                <Image src={arrowForward} />
              </Button>
              <Link href="/Summary">
                <Button
                  variant="contained"
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "18px",
                    height: "56px",
                    width: "169px",
                    textTransform: "none",
                    marginBottom: "10px",
                    fontFamily: "Livvic-Medium",
                  }}
                >
                  Confirm Appointment
                </Button>
              </Link>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "18px",
                  height: "56px",
                  width: "169px",
                  border: "1px solid #284473",
                  textTransform: "none",
                  fontFamily: "Livvic-Medium",
                }}
              >
                Back to Home
              </Button>
            </Grid>
          </Grid>
        ))}
      </Card>
    </>
  );
};

export default CurrentAppointmentLayout;
