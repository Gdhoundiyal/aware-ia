import { useState } from "react";
import { Box, Tabs, Tab, Badge, useMediaQuery, Typography } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import InsightsIcon from "@mui/icons-material/Insights";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import TacticalDeepDives from "./TacticalDeepDives";

const tabItems = [
    { label: "Intra-Club", icon: <ShieldIcon fontSize="small" />, count: 3, value: "0" },
    { label: "Inter-Club", icon: <PublicIcon fontSize="small" />, count: 5, value: "1" },
    { label: "Tactical Deep Dives", icon: <InsightsIcon fontSize="small" />, count: 2, value: "2" },
    { label: "Game Day Decisions", icon: <SportsSoccerIcon fontSize="small" />, count: 8, value: "3" }
];

export const AwarianForam = () => {
    const [value, setValue] = useState("0"); // Default active tab as string
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ p: 1, borderRadius: "10px", }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%", overflowX: isMobile ? "auto" : "unset", bgcolor: "#dbdbdb", pt: 1, borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                    <TabList aria-label="lab API tabs example"
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        variant={isMobile ? "scrollable" : "standard"} 
                        scrollButtons={isMobile ? "auto" : false} 
                        sx={{
                            "& .MuiTabs-indicator": { display: "none" }, 
                            "& .MuiTab-root": {
                                textTransform: "none",
                                borderRadius: "10px",
                                minHeight: "32px",
                                px: isMobile ? 2 : 2, 
                                ml: isMobile ? 1 : 2,
                                fontSize: isMobile ? "12px" : "14px", 
                                opacity:1,
                                "&.Mui-selected": { bgcolor: "white",color:"black", fontWeight:"semi-bold" },
                                "&:hover": { bgcolor: "white" }
                            }
                        }}
                    >
                        {tabItems.map((item) => (
                            <Tab
                                key={item.value}
                                icon={item.icon}
                                iconPosition="start"
                                // sx={{color:"black"}}
                                value={item.value}
                                label={
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2,}}>
                                      <span className="text-black">{item.label}</span> 
                                        <Badge
                                            badgeContent={item.count}
                                            color="primary"
                                            sx={{
                                                "& .MuiBadge-badge": {
                                                    bgcolor: "#3b82f6",
                                                    color: "white",
                                                    fontSize: "10px",
                                                    fontWeight: "bold"
                                                }
                                            }}
                                        />
                                    </Box>
                                }
                            />
                        ))}
                    </TabList>
                </Box>
                <TabPanel value="0" sx={{ p: 2 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Intra club
                    </Typography>
                </TabPanel>
                <TabPanel value="1" sx={{ p:2 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Inter club
                    </Typography>
                </TabPanel>
                <TabPanel value="2" sx={{ p: 2 }}>
                    <TacticalDeepDives />
                </TabPanel>
                <TabPanel value="3" sx={{ p: 2 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Game day descision
                    </Typography>
                </TabPanel>
            </TabContext>
        </Box>
    );
};