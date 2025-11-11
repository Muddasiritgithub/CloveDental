"use client"
import { useState } from 'react';
 import Link from 'next/link';
import Image from 'next/image';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import bgImage from "../public/Assets/Images/login-bg.png";
import Mosols from "../public/assets/Images/Mosols.jpg";
import ButtonOne from '../src/app/components/common/Button/ButtonOne';
import TextFieldSimple from '../src/app/components/common/Input/TextFieldSimple';
import FeildPassword from '../src/app/components/common/Input/FeildPassword';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <Box sx={{
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${bgImage.src})`,
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      height: "100%"
    }}>
      <Container maxWidth="sm">
        <Box sx={{  padding: 2, borderRadius: 10, border: "solid 1px #F5F1ED" }}>
          <Box sx={{ textAlign: "center", mb: 3, }}>
            <Box sx={{ mt: 4 }}>
              <Image
                src={Mosols}
                alt="logo image"
                width={124}
                height={124}
              />
            </Box>
            <Typography variant="h5" sx={{ mt: 3, fontFamily: "Livvic-Bold" }}>Ensures a seamless experience</Typography>
            <Typography sx={{ mt: 3, mb: 6,fontSize: 16, fontFamily: "Livvic-Regular" }}>
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            </Typography>
          </Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >

            <Grid item xs={12} sm={10}>
              <Box
                sx={{
                  display: "flex",
                  mb: 1,
                  width: "100%"
                }}
              >
                
                <TextFieldSimple
                  required="true"
                  id="email"
                  label="Username"
                  name="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              
              <FeildPassword
                label="Password *"
                type={showPassword ? 'text' : 'password'}
                value={password}
                sx={{ color: "red" }}
                onChange={handlePasswordChange}
                showPassword={showPassword}
                toggleShowPassword={handleToggleShowPassword}
              />

              <Typography sx={{ mt: 5 }}>
                <Link
                  href=""
                  style={{
                    textDecoration: 'none',
                    color: '#000000',
                    fontFamily: "Livvic-Regular",
                    transition: 'Color 0.3s',
                  }}>
                  Forget password?
                </Link>
              </Typography>
              <Box sx={{ mt: 5 }}>
                <ButtonOne
                   btnText={"Continue"}
                />
                </Box>
                <Link
                  href="/Signup" 
                  style={{ textDecoration: 'none',transition: 'Color 0.3s', fontFamily: "Livvic-Light" }}>
               <Typography sx={{ mt: 4, mb: 3,fontFamily:"Livvic-Semibold" }}>
                  Create New Account?
               </Typography>
                </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>

  );
};

export default Login;
