import React, { useState } from "react";
import { Box, IconButton, Drawer, useMediaQuery, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarTop from "../SideBar/SideBarTop";
import SideBarBottomLayout from "../SideBar/SideBarBottomLayout";

const Layout = ({ children, sidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ marginBottom: 2 }}>
        <SideBarTop />
      </Box>
      <SideBarBottomLayout />
    </Box>
  );
  const boxSx = {
    padding: isMobile ? 0 : "10px", // Set padding to 0 on mobile
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {sidebar && (
        <Box
          sx={{
            width: { xs: 0, md: 250 }, // Mobile pe 0 width aur desktop pe 250px
            flexShrink: 0,
          }}
        >
          {isMobile ? (
            <Drawer anchor="left" open={isOpen} onClose={toggleSidebar}>
              {drawerContent}
            </Drawer>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px 0px",
              }}
            >
              {drawerContent}
            </Box>
          )}
        </Box>
      )}
      <Box sx={{ flexGrow: 1, width: { xs: "100%", md: `calc(100% - 250px)` } }}>
        {isMobile && (
          <Toolbar
            sx={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              padding: 0,
              margin: 0,
            }}
          >
            <IconButton edge="start" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        )}
        <Box sx={{ ...boxSx }}>{children[1]}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
