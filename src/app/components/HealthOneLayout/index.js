import React from "react";
import {
  Paper,
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import LocationCard from "../../../../src/app/components/common/locationCard";
import PlaceCard from "../../../../src/app/components/common/placeCard";
import officeVisitIcon from "../../../../public/Assets/Images/officeVisitIcon.svg";
import virtualVisitIcon from "../../../../public/Assets/Images/virtualVisitIcon.svg";
import arrowRight from "../../../../public/assets/Images/arrowRight.svg";
import Link from "next/link";
import Image from "next/image";
import OfficeVisitCard from "../../../../src/app/components/common/OfficeVisitCard";

const Index = () => {

  return (
    <>
      <Box sx={{marginLeft:"10px"}}>
           <Card
            variant="outlined"
            sx={{
              width: "100%",
               boxSizing: "border-box",
              borderRadius: "16px",
              padding: 2,
              marginBottom: 2,
            }}
          >
            <Typography variant=""
              sx={{
                fontFamily: "Livvic-Medium",
                paddingBottom: "20px",
                color: "#00000",
                fontSize: "24px",
              }}
            >
              Schedule an Appointment
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, horizontally on desktop
                gap: "5px",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "calc(50% - 2.5px)" }, // Full width on mobile, half width on desktop with gap adjustment
                  height: "auto", // Adjust height as necessary
                }}
              >
                <OfficeVisitCard
                  href="/AppointmentSchedual"
                  iconSrc={officeVisitIcon}
                  text="Office Visit"
                  arrowIconSrc={arrowRight}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "calc(50% - 2.5px)" }, // Full width on mobile, half width on desktop with gap adjustment
                  height: "auto", // Adjust height as necessary
                }}
              >
                <OfficeVisitCard
                  href="/AppointmentSchedual"
                  iconSrc={virtualVisitIcon}
                  text="Virtual Visit"
                  arrowIconSrc={arrowRight}
                />
              </Box>
            </Box>
          </Card>
          <Card
            variant="outlined"
            elevation={3}
            sx={{ padding: 2, marginBottom: 2, borderRadius: "16px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Livvic-Medium",
                  paddingBottom: "20px",
                  color: "#000000",
                  fontSize: "24px",
                }}
              >
                Appointments
              </Typography>
              <Box
                sx={{
                  fontFamily: "Livvic-Medium",
                  paddingBottom: "20px",
                  cursor: "pointer",
                  color: "#284473",
                  fontSize: "16px",
                }}
              >
                View All
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <LocationCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <LocationCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <LocationCard />
              </Grid>
            </Grid>
          </Card>

          <Card
            variant="outlined"
            elevation={3}
            sx={{ padding: 2, marginBottom: 2, borderRadius: "16px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Livvic-Medium",
                  paddingBottom: "20px",
                  color: "#000000",
                  fontSize: "24px",
                }}
              >
                Near You
              </Typography>
              <Box
                sx={{
                  fontFamily: "Livvic-Medium",
                  paddingBottom: "20px",
                  cursor: "pointer",
                  color: "#284473",
                  fontSize: "16px",
                }}
              >
                View All
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <PlaceCard />
              </Grid>
            </Grid>
          </Card>
       </Box>
    </>
  );
};

export default Index;
