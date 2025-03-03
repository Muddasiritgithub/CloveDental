import React, { useState } from "react";
import { Card, Box, Typography, Grid } from "@mui/material";
import dateIcon from "../../../../public/Assets/Images/dateIcon.svg";
import locationImage from "../../../../public/Assets/Images/locationImage.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const data = [
  {
    locationName: "Location Name",
    address: "192 9th Street, Monahanville 94674-3137",
    buttons: [
      { time: "2 am", selected: true },
      { time: "3 am", selected: false },
      { time: "4 am", selected: false },
      { time: "5 am", selected: true },
      { time: "6 am", selected: false },
      { time: "7 am", selected: true },
      { time: "8 am", selected: false },
      { time: "9 am", selected: true },
    ],
  },
];

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const renderLocation = (item, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Card
        variant="outlined"
        sx={{ px: 4, borderRadius: "15px", pt: 3, pb: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 2, marginBottom: "16px" }}>
              <Image src={locationImage} alt="Location" />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: "Livvic-Semibold" }}>
                  {item.locationName}
                </Typography>
                <Typography sx={{ fontFamily: "Livvic-Regular" }}>
                  {item.address}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ backgroundColor: "#FBF9F8" }}>
              {item.buttons.map((button, buttonIndex) => (
                <Grid item xs={6} sm={4} key={buttonIndex}>
                  <Box
                    sx={{
                      // width: "100%"
                      height: "29px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      textAlign: "center",
                      backgroundColor: button.selected ? "#f0f0f0" : "#fff",
                    }}
                  >
                    <Link
                      href="/TimeFixtureLayout"
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        listStyle: "none",
                        color: "#284473",
                      }}
                      passHref
                    >
                      <Typography
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          listStyle: "none",
                          fontFamily: "Livvic-Medium",
                        }}
                      >
                        {button.time}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );

  return (
    <Card
      variant="outlined"
      sx={{ px: 2, borderRadius: "15px", pt: 5, pb: 3, marginTop: "16px" }}
    >
      <Box
        display="flex"
        alignItems="center"
        paddingBottom="20px"
        position="relative"
      >
        <Typography sx={{ fontFamily: "Livvic-Semibold" }}>
          {format(selectedDate, "MMMM dd, yyyy")}
        </Typography>
        <Image
          src={dateIcon}
          alt="Date Icon"
          width={32}
          height={32}
          style={{ cursor: "pointer", marginLeft: "auto" }}
          onClick={() => setShowDatePicker(!showDatePicker)}
        />
        {showDatePicker && (
          <Box
            sx={{ position: "absolute", top: "40px", right: "0", zIndex: 1000 }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </Box>
        )}
      </Box>
      <Grid container spacing={3}>
        {[...Array(4)].map((_, index) => renderLocation(data[0], index))}
      </Grid>
    </Card>
  );
};

export default Index;
