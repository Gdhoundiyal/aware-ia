import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import {
  Home,
  Group,
  CalendarMonth,
  BarChart,
  Settings,
} from "@mui/icons-material";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { text: "Dashboard", icon: <Home />, path: "/dashboard" },
  { text: "Team", icon: <Group />, path: "/dashboard/teams" },
  { text: "Matches", icon: <CalendarMonth />, path: "/dashboard/matches" },
  {
    text: "Standings",
    icon: <SelectAllOutlinedIcon />,
    path: "/dashboard/standings",
  },
  { text: "Analytics", icon: <BarChart />, path: "/dashboard/analytics" },
  {
    text: "Insight Training",
    icon: <LightbulbOutlinedIcon />,
    path: "/dashboard/training",
  },
  {
    text: "Awareians Forum",
    icon: <FeedOutlinedIcon />,
    path: "/dashboard/forum",
  },
  {
    text: "Post Match Feedback",
    icon: <RateReviewOutlinedIcon />,
    path: "/dashboard/feedback",
  },
  { text: "Settings", icon: <Settings />, path: "/dashboard/settings" },
];

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#111827",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            ⚽ Awareia
          </Typography>
        </Box>
        <List>
          {sidebarItems.map(({ text, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <ListItemButton
                key={text}
                component={Link}
                to={path}
                sx={{
                  backgroundColor: isActive ? "#2563EB" : "transparent",
                  "&:hover": {
                    backgroundColor: isActive ? "#2563EB" : "#374151",
                  },
                  borderRadius: "8px",
                  mx: 1,
                  my: 0.5,
                }}
              >
                <ListItemIcon sx={{ color: "#fff",minWidth: 40 }}>{icon}</ListItemIcon>
                <ListItemText
                  primary={<Typography variant="subtitle2">{text}</Typography>}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
      <Box>
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
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#111827",
            zIndex: 1300,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#111827",
            color: "#fff",
            borderRight: "none",
            position: "relative",
            zIndex: 1,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
