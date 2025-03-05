import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { AccountCircle, Notifications, Menu as MenuIcon } from "@mui/icons-material";

export default function CustomNavbar({ onMenuClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userdata, setUserData] = useState({});
  const navigate = useNavigate(); 
  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (menuItem) => {
    setAnchorEl(null);
    if (menuItem === "logout") {
      localStorage.clear(); 
      navigate("/login"); 
    }
  };

  const userleague = JSON.parse(localStorage.getItem("user"))
  const leagueTitle = userleague?.league?.league_title;
  console.log("leagueeeee",leagueTitle )
  const menuId = "primary-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={() => handleMenuClose()}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          minWidth: 180,
          padding: 1
        }
      }}
    >
      <MenuItem onClick={() => handleMenuClose("profile")} sx={{ '&:hover': { backgroundColor: "#f5f5f5" }, padding: "10px 20px", fontSize: "0.9rem", fontWeight: 500 }}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose("account")} sx={{ '&:hover': { backgroundColor: "#f5f5f5" }, padding: "10px 20px", fontSize: "0.9rem", fontWeight: 500 }}>
        My account
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose("logout")} sx={{ '&:hover': { backgroundColor: "#ffebee", color: "#d32f2f" }, padding: "10px 20px", fontSize: "0.9rem", fontWeight: 500 }}>
        Logout
      </MenuItem>
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
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
            {userdata?.firstName + " " + userdata?.lastName}
          </Typography>
          <Typography variant="body2" color="gray" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
            {userdata?.role} • {userdata?.team?.[0]?.teamName} • {leagueTitle}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 }, order: { xs: 2, sm: 2 }, width: { xs: "100%", sm: "auto" }, justifyContent: { xs: "space-between", sm: "flex-end" } }}>
          <TextField
            select
            size="small"
            value={userdata?.team?.[0]?.teamId || ""}
            onChange={(e) => console.log("Selected team:", e.target.value)}
            sx={{ minWidth: { xs: "calc(100% - 96px)", sm: 200 }, flexGrow: { xs: 1, sm: 0 } }}
          >
            {userdata?.team?.map((team) => (
              <MenuItem key={team.teamId} value={team.teamId}>
               <Typography variant="subtitle2"> {team.teamName}</Typography>
              </MenuItem>
            ))}
          </TextField>
          <IconButton color="inherit" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
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
