import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Avatar, Box, Typography, Divider } from "@mui/material";
import { Home, Group, CalendarMonth, BarChart, Settings } from "@mui/icons-material";

const sidebarItems = [
  { text: "Overview", icon: <Home />, active: true },
  { text: "Team", icon: <Group />, active: false },
  { text: "Matches", icon: <CalendarMonth />, active: false },
  { text: "Analytics", icon: <BarChart />, active: false },
  { text: "Settings", icon: <Settings />, active: false },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#111827",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          ⚽ AwareIA
        </Typography>
      </Box>

      <List>
        {sidebarItems.map(({ text, icon,    active }) => (
          <ListItemButton key={text} sx={{ 
            backgroundColor: active ? "#2563EB" : "transparent",
            "&:hover": { backgroundColor: "#1E40AF" },
            borderRadius: "8px",
            mx: 1,
            my: 0.5
          }}>
            <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ backgroundColor: "#374151", my: 1 }} />

      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Avatar sx={{ bgcolor: "#2563EB", mr: 2 }}>JD</Avatar>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="body2" color="gray">
            john@example.com
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
