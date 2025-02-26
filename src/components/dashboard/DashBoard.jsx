import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import CustomNavbar from "../static/Navbar";
import Sidebar from "./SideDrawer";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      {/* Navbar */}
      <CustomNavbar onMenuClick={handleDrawerToggle} />
      
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          marginLeft: { md: "240px" }, // Ensures content doesn't go under sidebar
          marginTop: "64px", // Adjust for navbar height
          width: { md: "calc(100% - 240px)" } // Prevent overlap
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
