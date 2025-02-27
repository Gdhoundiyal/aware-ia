import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Avatar, Box, Typography, Divider } from "@mui/material";
import { Home, Group, CalendarMonth, BarChart, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const sidebarItems = [
  { text: "Overview", icon: <Home />, active: true,path:"/dashboard" },
  { text: "Team", icon: <Group />, active: false, path:"/dashboard/teams" },
  { text: "Matches", icon: <CalendarMonth />, active: false,path:"/dashboard/matches" },
  { text: "Analytics", icon: <BarChart />, active: false,path:"/dashboard/analytics" },
  { text: "Settings", icon: <Settings />, active: false,path:"/dashboard/settings" },
];

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const drawerContent = (
    <Box sx={{ width: 240, backgroundColor: "#111827", color: "#fff", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">⚽ AwareIA</Typography>
        </Box>
        <List>
          {sidebarItems.map(({ text, icon, active, path }) => (
            <ListItemButton key={text} component={Link} to={path} sx={{
              backgroundColor: active ? "#2563EB" : "transparent",
              "&:hover": { backgroundColor: "#1E40AF" },
              borderRadius: "8px",
              mx: 1,
              my: 0.5
            }}>
              <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
              {/* <Link to={path} style={{ textDecoration: "none" }} /> */}
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box>
        <Divider sx={{ backgroundColor: "#374151", my: 1 }} />
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#2563EB", mr: 2 }}>JD</Avatar>
          <Box>
            <Typography variant="body1" fontWeight="bold">John Doe</Typography>
            <Typography variant="body2" color="gray">john@example.com</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#111827",
            color: "#fff",
            borderRight: "none",
          },
        }}
        open    
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
