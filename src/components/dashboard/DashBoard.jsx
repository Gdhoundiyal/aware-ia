import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import CustomNavbar from "../static/Navbar";
import Sidebar from "./SideDrawer";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      minHeight: "100vh",
      maxWidth: "100vw",
      overflow: "hidden" // Prevent body scroll when drawer is open
    }}>
      <CssBaseline />
      
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main content wrapper */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          maxWidth: "100%"
        }}
      >
        {/* Navbar */}
        <CustomNavbar onMenuClick={handleDrawerToggle} />
        
        {/* Content area */}
        <Box sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2, md: 3 },
          backgroundColor: "#f5f5f5",
          overflow: "auto",
          height: "calc(100vh - 64px)", // Subtract navbar height
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            background: "#f1f1f1"
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
          },
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
