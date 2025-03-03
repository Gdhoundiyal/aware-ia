import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Button, TextField } from "@mui/material";
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
      padding: { xs: 0.5, sm: 1 }, 
      width: "none",
      position: "static",
      backgroundColor: "#fff"
    }}>
      <Toolbar 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: { xs: 1, sm: 2 }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          width: { xs: '100%', sm: 'auto' },
          order: { xs: 1, sm: 1 }
        }}>
          <IconButton 
            color="inherit" 
            aria-label="open drawer" 
            onClick={onMenuClick} 
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography 
              variant="h6" 
              fontWeight="bold"
              sx={{ 
                fontSize: { xs: "1rem", sm: "1.25rem" }
              }}
            >
              {userdata?.firstName + " " + userdata?.lastName}
            </Typography>
            <Typography 
              variant="body2" 
              color="gray"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" }
              }}
            >
              {userdata?.role} • {userdata?.team?.[0]?.teamName} • Premier League
            </Typography>
          </Box>
        </Box>

        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: { xs: 1, sm: 2 },
          order: { xs: 2, sm: 2 },
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "space-between", sm: "flex-end" }
        }}>
          <TextField
            select
            size="small"
            value={userdata?.team?.[0]?.teamId || ""}
            onChange={(e) => {
              // Handle team change if needed
              console.log("Selected team:", e.target.value);
            }}
            sx={{ 
              minWidth: { xs: "calc(100% - 96px)", sm: 200 },
              flexGrow: { xs: 1, sm: 0 }
            }}
          >
            {userdata?.team?.map((team) => (
              <MenuItem key={team.teamId} value={team.teamId}>
                {team.teamName}
              </MenuItem>
            ))}
          </TextField>
          <IconButton 
            color="inherit"
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
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
