import { useState } from "react";
import { Box, Typography, MenuItem, Select, InputLabel, Paper } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
export const TeamManagement = () => {
  const [role, setRole] = useState("");

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box component={Paper} sx={{ border: "1px solid lightgray", p: 2, borderRadius: "5px" }}>
        <Typography variant="h6" fontWeight="bold">
          Team Management
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>
          Manage coaching staff roles for each associated team
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="First Team" value="1" sx={{ textTransform: "capitalize" }} />
              <Tab label="Second Team" value="2" sx={{ textTransform: "capitalize" }} />
              <Tab label="Third Team" value="3" sx={{ textTransform: "capitalize" }} />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ p: 1, bgcolor: "#f0f2f2",mt:2 }}>
            <Box>
              <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Role</InputLabel>
              <Select fullWidth size="small" value={role} onChange={(e) => setRole(e.target.value)}>
                <MenuItem value="">Select Role</MenuItem>
              </Select>
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{ p: 1, bgcolor: "#f0f2f2",mt:2 }}>Item Two</TabPanel>
          <TabPanel value="3" sx={{ p: 1, bgcolor: "#f0f2f2",mt:2 }}>Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};



