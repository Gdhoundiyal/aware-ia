import React from "react";
import { Box, Stack } from "@mui/material";
import MatchWeather from "./WeatherForecast";
import TeamStatus from "./TeamStatus";
import PreMatchChecklist from "./PrematchCecklist";
import MatchPreparation from "./Matchpreparation";
import Teams from "./Teams";
import Matches from "./Matches";
import SportsAnalyticsDashboard from "./Analytics";


const Overview = () => {
  // Dummy data for the components
  const weatherData = {
    location: "Celtic Park, Glasgow",
    date: "Feb 20, 2024",
    temperature: 18,
    condition: "Partly Cloudy",
    windSpeed: "12 km/h",
    humidity: "65%",
  };

  const teamData = {
    available: 16,
    injured: 3,
    suspended: 1,
    players: [
      { name: "John Smith", status: "available" },
      { name: "Mike Johnson", status: "suspended" },
      { name: "David Wilson", status: "suspended" },
    ],
  };

  const checklistData = {
    completedTasks: ["Print game lineup card"],
    refereeFees: [
      { role: "MR", amount: 100 },
      { role: "AR1", amount: 34 },
      { role: "AR2", amount: 50 },
    ],
    pendingTasks: ["Touch base with opponent", "Align with co-coaches/manager"],
  };

  return (
  <Stack spacing={3}>
  <Box>
    <MatchPreparation/>
  </Box>
 
    <Box
      display="flex"
      gap={2}
      sx={{ flexWrap: "wrap"}} // Responsive design for smaller screens
    >
      <MatchWeather {...weatherData} />
      <TeamStatus {...teamData} />
      <PreMatchChecklist {...checklistData} />
    </Box>
    <Teams/>
    <Matches/>
    <SportsAnalyticsDashboard/>
    </Stack>
  );
};

export default Overview;
