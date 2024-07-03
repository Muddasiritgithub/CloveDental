import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Mosols from "../../../../../public/Assets/Images/Mosols.jpg"
import insurance from "../../../../../public/Assets/Images/insurance.svg"
import insuranceWhite from "../../../../../public/Assets/Images/insuranceWhite.svg"
import settings from "../../../../../public/Assets/Images/settings.svg"
import settingsIconWhite from "../../../../../public/Assets/Images/settingsIconWhite.svg"
import chat from "../../../../../public/Assets/Images/chat.svg"
import chatWhiteIcon from "../../../../../public/Assets/Images/chatWhiteIcon.svg"
import heart from "../../../../../public/Assets/Images/heart.svg"
import heartWhite from "../../../../../public/Assets/Images/heartWhite.svg"
import arrow from "../../../../../public/Assets/Images/arrow.svg"
import arrowWhite from "../../../../../public/Assets/Images/arrowWhite.svg"



import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function index() {
  const path = usePathname();
  return (<>
    <Card variant="outlined" sx={{ width: 250, borderRadius: "16px",paddingBottom:"50px"}}>
      <Box  >
        <List>
          <Box sx={{ paddingLeft: "15px", marginBottom: "40px", marginTop: "20px" }}>
            <Image src={Mosols} width={100} height={100} />
          </Box>
          <Link href="/healthOne" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton  sx={{
                backgroundColor: path === "/healthOne" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                  backgroundColor: path === "/healthOne" ? "#1b749e" : "#fafaf7"
                }
              }}>
                <Image src={path === "/healthOne" ? arrowWhite : arrow} width="32px" height="28px" />
                <ListItemText primary="My Health" primaryTypographyProps={{
                  style: { color: path === "/healthOne" ? '#FFFFFF' : '#284473',fontFamily:"Livvic-Medium",fontSize:"16px" }
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/Health" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton   sx={{
                backgroundColor: path === "/Health" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                  backgroundColor: path === "/Health" ? "#1b749e" : "#fafaf7"
                }
              }}>
                <Image src={path === "/Health" ? heartWhite : heart} width="32px" height="28px" />
                <ListItemText primary="My Health" primaryTypographyProps={{
                  style: { color: path === "/Health" ? '#FFFFFF' : '#284473',fontFamily:"Livvic-Medium",fontSize:"16px" }
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/Chat" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton   sx={{
                backgroundColor: path === "/Chat" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                  backgroundColor: path === "/Chat" ? "#1b749e" : "#fafaf7"
                }
              }}>
                <Image src={path === "/Chat" ? chatWhiteIcon : chat} width="32px" height="28px" />
                <ListItemText primary="Chat" primaryTypographyProps={{
                  style: { color: path === "/Chat" ? '#FFFFFF' : '#284473',fontFamily:"Livvic-Medium",fontSize:"16px" }
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/Insurance" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton   sx={{
                backgroundColor: path === "/Insurance" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                  backgroundColor: path === "/Insurance" ? "#1b749e" : "#fafaf7"
                }
              }}>
                <Image src={path === "/Insurance" ? insuranceWhite : insurance} width="32px" height="28px" />
                <ListItemText primary="Insurance" primaryTypographyProps={{
                  style: { color: path === "/Insurance" ? '#FFFFFF' : '#284473' ,fontFamily:"Livvic-Medium",fontSize:"16px"}
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/Settings" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton   sx={{
                backgroundColor: path === "/Settings" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px","&:hover": {
                  backgroundColor: path === "/Settings" ? "#1b749e" : "#fafaf7"
                }
              }}>
                <Image src={path === "/Settings" ? settingsIconWhite : settings} width="32px" height="28px" />
                <ListItemText primary="Settings" primaryTypographyProps={{
                  style: { color: path === "/Settings" ? '#FFFFFF' : '#284473',fontFamily:"Livvic-Medium",fontSize:"16px" }
                }} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>
      </Box>
    </Card>
  </>
  );



}

export default index