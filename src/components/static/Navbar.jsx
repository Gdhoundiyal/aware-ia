  import { useEffect, useState } from "react";
  import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
  import { AccountCircle, Notifications, Menu as MenuIcon } from "@mui/icons-material";

  export default function CustomNavbar({ onMenuClick }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userdata, setUserData] = useState({})
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(()=>{
      const userdata = localStorage.getItem("user");
      setUserData(JSON.parse(userdata))
      console.log("userdataaaaa",userdata)
    },[])

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const menuId = "primary-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <AppBar position="fixed" color="default" elevation={0} sx={{ 
        zIndex: { xs: 1200, md: 2 },
        padding: 1, 
        width: "none",
        position: "static",
        backgroundColor: "#fff"
      }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={onMenuClick} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" fontWeight="bold">{userdata?.firstName + " " + userdata?.lastName }</Typography>
            <Typography variant="body2" color="gray">{userdata?.role} • Alba Tiger • Premier League</Typography>
          </Box>     
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="outlined">Select team ▾</Button>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMenu}
      </AppBar>  
    );
  }
