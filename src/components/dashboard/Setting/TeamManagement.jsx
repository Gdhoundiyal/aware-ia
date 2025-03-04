import { useState } from "react";
import { Box, Tabs, Tab, Typography, MenuItem, Select, InputLabel } from "@mui/material";

export const TeamManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [role, setRole] = useState("");

  const handleTabChange = (_event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{p:1,bgcolor:"#fff"}}>
    <Box sx={{ border: "1px solid lightgray", p: 2, borderRadius: "5px" }}>
      <Typography variant="h6" fontWeight="bold">
        Team Management
      </Typography>
      <Typography sx={{fontSize:"14px",color:"gray",mb:2}}>
        Manage coaching staff roles for each associated team
      </Typography>

      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="First Team" sx={{textTransform:"capitalize"}} />
        <Tab label="Second Team" sx={{textTransform:"capitalize"}}/>
        <Tab label="Third Team" sx={{textTransform:"capitalize"}}/>
      </Tabs>

      <Box>
        <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Role</InputLabel>
        <Select fullWidth size="small" value={role} onChange={(e) => setRole(e.target.value)}>
          <MenuItem value="">Select Role</MenuItem>
        </Select>
      </Box>
    </Box>
    </Box>
  );
};

