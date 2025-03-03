"use client";
import React from "react";
import { useState } from "react";
import { MenuItem, Select, Button, TextField, Box,InputLabel,FormControl,Link } from "@mui/material";
 


 const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [number, setNumber] = useState("");

  const roundStyle={
    borderRadius:'9px',
    "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root":{
      borderRadius:'9px'
    }
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
   };

  const handleChangeBirthdate = (e) => {
    setBirthdate(e.target.value);  
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleChangeZipCode = (e) => {
    setZipCode(e.target.value);
  };

  
  const handleClick = () => {
    const userInfo = {
      firstName,
      lastName,
      gender,
      email,
    birthdate,
      address,
      city,
      state,
      zipCode,
      number,
    };

    alert(
      `User Info:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nGender: ${gender}\nEmail: ${email}\nMobile: ${number}\nBirthday: ${birthdate}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip Code: ${zipCode}`
    );

    setFirstName("");
    setLastName("");
    setGender("");
    setEmail("");
    setBirthdate("");
    setAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setNumber("");
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}
     >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "616px",
          marginBottom:'24px',
          borderRadius:"13",
         }}
      >
        <TextField
          id="name"
          label="First Name"
          fullWidth
          value={firstName}
          onChange={handleChangeFirstName}
          sx={{ 
            backgroundColor: "#F5F1ED", flex: 1,  marginRight: "10px", ...roundStyle}}
        />
        <TextField
          id="last-name"
          label="Last Name"
          fullWidth
          value={lastName}
          onChange={handleChangeLastName}
          sx={{ backgroundColor: "#F5F1ED",  flex: 1,...roundStyle }}
        />
      </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px" ,   }}>
      <FormControl sx={{ width: "100%", maxWidth: "616px",fontFamily:"Livvic-Semibold"}}>
      <InputLabel id="demo-select-small-label">Gender</InputLabel>
       <Select
        id="demo-select-small"
        value={gender}
        label="Gender"
        fullWidth
        labelId="demo-select-small-label"
        onChange={handleChangeGender}
        sx={{ backgroundColor: "#F5F1ED", flex: 1, marginRight: "10px",...roundStyle }}
      >
         <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="robot">Robot</MenuItem>
      </Select>
      </FormControl>
    </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px", }}>
        <TextField
          id="email"
          label="Email Address"
          fullWidth
          value={email}
          onChange={handleChangeEmail}
          sx={{  backgroundColor: "#F5F1ED",...roundStyle }}
        />
      </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px", }}>
        <TextField
          id="number"
          label="Mobile NO."
          type="number"
          fullWidth
          value={number}
          onChange={handleChangeNumber}
          sx={{  backgroundColor: "#F5F1ED",...roundStyle  }}
        />
      </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px" }}>
        <TextField
          id="birthday"
          label="Birthdate"
          fullWidth
          value={birthdate}
          onChange={handleChangeBirthdate}
          sx={{  backgroundColor: "#F5F1ED",...roundStyle }}
        />
      </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px", }}>
        <TextField
          id="address"
          label="Address"
          fullWidth
          variant="outlined"
          value={address}
          onChange={handleChangeAddress}
          sx={{  backgroundColor: "#F5F1ED",...roundStyle }}
        />
      </Box>

      <Box
        sx={{marginBottom: "24px",width: "100%",maxWidth: "616px",display: "flex",justifyContent: "space-between",gap:"10px" }}
      >
        <FormControl sx={{width: "100%",maxWidth: "616px"}}> 
          <InputLabel id="demo-select-small-label">City</InputLabel>
          <Select
          id="city"
          value={city}
          label="City"
          fullWidth
          onChange={handleChangeCity}
          sx={{  backgroundColor: "#F5F1ED", flex: 1, marginRight: "10px",...roundStyle }}
        >
          <MenuItem value="California">California</MenuItem>
          <MenuItem value="London">London</MenuItem>
          <MenuItem value="Austria">Austria</MenuItem>
        </Select>
        </FormControl>
        <FormControl sx={{width: "100%",maxWidth: "616px"}}>
        <InputLabel id="demo-select-small-label">State</InputLabel>
          <Select
          id="state"
          value={state}
          label="State"
          onChange={handleChangeState}
          fullWidth
          sx={{  backgroundColor: "#F5F1ED", flex: 1 ,...roundStyle}}
        >
          <MenuItem value="United State Of America">United State Of America</MenuItem>
          <MenuItem value="United Kindom">United Kindom</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: "24px", width: "100%", maxWidth: "616px" }}>
        <TextField
          id="zip"
          label="Zip Code"
          fullWidth
          value={zipCode}
          onChange={handleChangeZipCode}
          sx={{  backgroundColor: "#F5F1ED",...roundStyle }}
        />
      </Box>

      <Box sx={{ width: "100%", maxWidth: "544px", marginBottom: "100px" }}>
        <Link href="/healthOne">
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            backgroundColor: "#284473",
            color: "#FFFFFF",
            borderRadius: "20px",
            height: "82px",
            marginTop: "90px",
            textTransform:'none',
            fontFamily:"Livvic-SemiBold"
          }}
          // onClick={handleClick}
        >
          Continue
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SignupForm;