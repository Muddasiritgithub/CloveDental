import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import locationImage from "../../../../../public/assets/Images/locationImage.png"; // Import the image
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    locationName: "Location Name",
    address: "192 9th Street, Monahanville 94674-3137",
  },
];
const handleGoBack = () => {
  window.history.back();
};

const Index = () => {
  return (
    <Box sx={{ marginLeft: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ChevronLeftIcon
            onClick={handleGoBack}
            sx={{
              fontSize: 24,
              border: "2px solid #284473",
              borderRadius: "10px",
              padding: 1,
              color: "#284473",
              height: "22px",
              cursor: "pointer",
            }}
          />
          <Typography sx={{ fontFamily: "Livvic-Semibold", fontSize: "24px" }}>
            Schedule an Appointment
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "10px",
              width: "90px",
              height: "30px",
              fontFamily: "Livvic-Semibold",
              color: "#284473",
              border: "2px solid #284473",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      <Card
        variant="outlined"
        sx={{
          px: 2,
          borderRadius: "15px",
          pt: 5,
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Image src={locationImage} width={50} height={50} alt="Location" />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: "Livvic-Semibold" }}>
              {data[0].locationName}
            </Typography>
            <Typography sx={{ fontFamily: "Livvic-Regular" }}>
              {data[0].address}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              mt: 2,
            }}
          >
            <Typography sx={{ marginRight: 0, fontFamily: "Livvic-Semibold" }}>
              March 19, 2024
            </Typography>
            <Typography sx={{ marginRight: 0, fontFamily: "Livvic-Regular" }}>
              12:00 PM
            </Typography>
          </Box>
        </Box>
      </Card>
      <Box mt={2} textAlign="center">
        <Link href="/AppointmentSuccessful">
          <Button variant="contained" sx={{ fontFamily: "Livvic-Semibold" }}>
            Confirm Appointment
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Index;
