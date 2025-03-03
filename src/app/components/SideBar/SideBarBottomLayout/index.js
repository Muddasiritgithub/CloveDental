import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import picture from "../../../../../public/Assets/Images/picture.svg"
import notificationIcon from "../../../../../public/Assets/Images/notificationIcon.svg"
import notificationIconWhite from "../../../../../public/Assets/Images/notificationIconWhite.svg"
import logoutIcon from "../../../../../public/Assets/Images/logoutIcon.svg"

import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function index() {
    const path = usePathname();
    return (<>
        <Card variant="outlined" sx={{ width: 250, borderRadius: "16px" }}>
            <Box sx={{ width: 250 }} >
                <List>
                    <Link href="#" style={{ textDecoration: "none" }}>
                        <ListItem disablePadding>
                            <ListItemButton  sx={{
                                backgroundColor: path === "/name" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                                    backgroundColor: path === "/name" ? "#1b749e" : "#fafaf7"
                                }
                            }}>
                                <Image src={picture} width="20px" height="28px" />
                                <ListItemText primary="Name" primaryTypographyProps={{
                                    style: { color: path === "/name" ? '#FFFFFF' : '#284473' ,fontFamily:"Livvic-Medium",fontSize:"16px"}
                                }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/Notification" style={{ textDecoration: "none" }}>
                        <ListItem disablePadding>
                            <ListItemButton  sx={{
                                backgroundColor: path === "/Notification" ? "#284473" : null, display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                                    backgroundColor: path === "/Notification" ? "#1b749e" : "#fafaf7"
                                }
                            }}>
                                <Image src={path === "/Notification" ?notificationIconWhite:notificationIcon} width="32px" height="28px" />
                                <ListItemText primary="Notification" primaryTypographyProps={{
                                    style: { color: path === "/Notification" ? '#FFFFFF' : '#284473',fontFamily:"Livvic-Medium",fontSize:"16px" }
                            }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="#" style={{ textDecoration: "none" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{
                                display: "flex", alignItems: "center", gap: "30px", "&:hover": {
                                    backgroundColor: "#fafaf7"
                                }
                            }}>
                                <Image src={logoutIcon} width="32px" height="28px" />
                                <ListItemText primary="Logout" primaryTypographyProps={{
                                    style: { color: "#284473",fontFamily:"Livvic-Medium",fontSize:"16px" }
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