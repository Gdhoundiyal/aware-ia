import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import CustomNavbar from "../static/Navbar";
import Sidebar from "./SideDrawer";
import PrivateRoute from "../../routes/PrivateRoutes";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    // <PrivateRoute>

    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* sidebar */}

      <Box>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      </Box>
      <Box sx={{ display: "flex", height: "100vh", flexDirection:"column",flexGrow:"3" }}>
        {/* navbar */}

        <Box>
        <CustomNavbar onMenuClick={handleDrawerToggle} />
        </Box>
       {/*main content  */}
       
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor:"#f5f5f5"
        }}
      >
        <Outlet /> 
      </Box>
      </Box>
      
    </Box>
  // </PrivateRoute>
  );
}
