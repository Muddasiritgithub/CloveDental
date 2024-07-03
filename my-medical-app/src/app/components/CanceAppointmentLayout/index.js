import { Box, Typography, Button, Card,useMediaQuery  } from '@mui/material';
import crossIcon from "../../../../public/Assets/Images/crossIcon.svg"
 import Image from 'next/image';
 import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const CancelAppointmentLayout = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

const cardSx = {
        paddingBottom: isMobile ? 0 : "20px", // Set padding to 0 on mobile
        marginLeft: isMobile ? 0 : "10px", // Set margin to 0 on mobile
    };
    const handleGoBack = () => {
        window.history.back();
      };

    return (
        <main>

            <Box sx={{ display: "flex",...cardSx, alignItems: "center",gap:"10px" }}>
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
                <Typography sx={{fontSize: "24px" ,fontFamily:"Livvic-Semibold"}}>Cancel Appointment</Typography>
            </Box>
            <Card variant="outlined" sx={{ borderRadius: "20px", minHeight: "70vh",...cardSx, }}>
                <Box sx={{ justifyContent: "center", textAlign: "center", padding: "20px", }}>
                    <Box sx={{ marginBottom: "24px" }}>
                        <Image src={crossIcon} alt="CrossIcon" width={40} height={40} />
                    </Box>
                    <Box sx={{ marginBottom: "24px" }}>
                        <Typography variant='body1' sx={{fontSize: "16px",fontFamily:"Livvic-Semibold" }}>Do you want to cancel your appointment?</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                    <Button variant="contained" sx={{fontSize: "12", width: "394px", height: "56",  borderRadius: "9px", textTransform: "none",fontFamily:"Livvic-Medium" }}>Yes</Button>
                    <Button variant="outlined" sx={{fontSize: "12", width: "394px", height: "56", borderRadius: "9px", textTransform: "none",fontFamily:"Livvic-Medium" }}>No</Button>
                </Box>
            </Card>

        </main>
    );
};

export default CancelAppointmentLayout;