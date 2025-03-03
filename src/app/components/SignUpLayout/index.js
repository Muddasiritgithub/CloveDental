import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import SignupForm from "./SignupForm";




const Index = () => {
    const handleGoBack = () => {
    window.history.back();
   };
   
  return (
    <Box
      sx={{
        backgroundColor: "rgba(245,241,237,0.3)",
        padding: 2,
        borderRadius: "50px",
        border: "solid 1px #F5F1ED",
        maxWidth: "xl",
        margin: "0 auto", 
      }}
     >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
         >
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
          <Typography
            variant="h5"
            sx={{
              color: "#000000",
              fontFamily: "Livvic-SemiBold",
              marginLeft: "12px",  
            }}
          >
            Signup
          </Typography>
        </Box>
        <SignupForm />
      </Box>
    </Box>
  );
};

export default Index;
