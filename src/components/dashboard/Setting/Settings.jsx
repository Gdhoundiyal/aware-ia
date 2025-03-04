import { Box, List, ListItem, Typography, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const sections = [
  { page: "Personal Information", link: "personalInfo" },
  { page: "Team Management", link: "team-management" },
  { page: "Club Management", link: "club-management" },
  { page: "Guest Access", link: "guest-access" },
  { page: "Deep Learning", link: "deep-learning" },
  { page: "Subscription & Billing", link: "subscription-billing" },
  { page: "Security", link: "security" },
  { page: "Notifications", link: "notifications" },
  { page: "Terms & Privacy", link: "privacy" },
  { page: "Close Account", link: "close-account" },
];

export const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    if (location.pathname === "/dashboard/settings") {
      navigate(`/dashboard/settings/${sections[0].link}`);
    }
  }, [location.pathname, navigate]);
  return (
    <Grid container sx={{ border: "1px solid lightgray" }}>
      {/* Sidebar for Desktop, Dropdown for Mobile */}
      <Grid size={{ xs: 12, sm: 3, md: 4 }} bgcolor={"#fff"} sx={{ borderRight: "1px solid lightgray" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: 550, borderBottom: "1px solid lightgray", p: 2 }}>
          Settings
        </Typography>
        <Box p={2}>
          {isMobile ? (
            // Dropdown for mobile screens
            <Select
              fullWidth
              value={sections.find((item) => location.pathname.includes(item.link))?.link || ""}
              onChange={(e) => navigate(`/dashboard/settings/${e.target.value}`)}
              displayEmpty
            >
              {sections.map((item) => (
                <MenuItem key={item.link} value={item.link} sx={{ color: item.page === "Close Account" ? "red" : "black" }}>
                  {item.page}
                </MenuItem>
              ))}
            </Select>
          ) : (
            // Sidebar List for larger screens
            <Box>
              <List>
                {sections.map((item) => {
                  const isSelected = location.pathname.includes(item.link);
                  return (
                    <ListItem
                      button
                      component={Link}
                      to={`/dashboard/settings/${item.link}`}
                      key={item.link}
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        borderRadius: "4px",
                        color: item.page === "Close Account" ? "red" : isSelected ? "#000" : "gray",
                        backgroundColor: isSelected ? "#f0f0f0" : "transparent",
                        ":hover": { color: item.page === "Close Account" ? "red" : "#000" },
                      }}
                    >
                      {item.page}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}
        </Box>
      </Grid>

      {/* Content Area */}
      <Grid size={{ xs: 12, sm: 9, md: 8 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
