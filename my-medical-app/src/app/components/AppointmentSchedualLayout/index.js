import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
import EcleaningIcon from "../../../../public/Assets/Images/EcleaningIcon.svg";
import EmergencyIcon from "../../../../public/Assets/Images/EmergencyIcon.svg";
import ConsultationIcon from "../../../../public/Assets/Images/consultationIcon.svg";
import TimeScreenLayout from "../../../../src/app/components/TimeScreenLayout";
import dateIcon from "../../../../public/assets/Images/dateIcon.svg";
import RadioBtn from '../../../../src/app/components/common/RadioBtn';
 
const Index = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const isMobile = useMediaQuery('(max-width: 600px)');


  const handleGoBack = () => {
    window.history.back();
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const boxSx = {
    px: isMobile ? 0 : "10px", // Set horizontal padding to 0 on mobile
    py: 0, // Set vertical padding to 0 (or any value you prefer)
  };

  return (
    <Box sx={{ ...boxSx }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
       >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          <Typography sx={{ fontFamily: "Livvic-Semibold", fontSize: "24px", color: "#00000" }}>
            Schedule an Appointment
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            textTransform: "capitalize",
            borderRadius: "10px",
            width: "90px",
            height: "30px",
            fontFamily: "Livvic-Semibold",
            color: "#284473",
            border: "2px solid #284473"
          }}
        >
          Cancel
        </Button>
      </Box>

      <Card
        variant="outlined"
        sx={{
          padding: "50px 20px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "16px"
        }}
      >
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} sm={4}>
            <RadioBtn
              value="Option 1"
              iconSrc={EcleaningIcon}
              label="Exam & Cleaning"
              handleRadioChange={handleRadioChange}
              selectedOption={selectedOption}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RadioBtn
              value="Option 2"
              iconSrc={EmergencyIcon}
              label="Emergency"
              handleRadioChange={handleRadioChange}
              selectedOption={selectedOption}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RadioBtn
              value="Option 3"
              iconSrc={ConsultationIcon}
              label="Consultation"
              handleRadioChange={handleRadioChange}
              selectedOption={selectedOption}
            />
          </Grid>
        </Grid>
      </Card>

      {selectedOption ? (
        <TimeScreenLayout />
      ) : (
        <Card variant="outlined" sx={{ marginTop: "16px", borderRadius: "16px" }}>
          <Box sx={{ height: "150px", textAlign: "center", padding: "130px 0px" }}>
            <Box>
              <Image
                src={dateIcon}
                alt="Date Icon"
                style={{ height: "40px", width: "43px", filter: "grayscale(100%)" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{ marginTop: "8px", marginBottom: "15px", color: "#808080", fontFamily: "Livvic-Semibold" }}
            >
              Please select the type of appointment
            </Typography>
            <Box
              sx={{
                padding: "20px",
                border: "1px dashed #808080",
                width: "140px",
                height: "120px",
                boxSizing: "border-box",
                margin: "auto",
              }}
            ></Box>
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default Index;
