import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import MatchWeather from "./WeatherForecast";
import TeamStatus from "./TeamStatus";
import PreMatchChecklist from "./PrematchCecklist";
import MatchPreparation from "./Matchpreparation";
import Teams from "./Teams";
import Matches from "./Matches";
import SportsAnalyticsDashboard from "./Analytics";
import axiosInstance from "../../axios/axiosInstance";

const Overview = () => {
  const [nextmatch, setNextMatch] = useState({});
  const [weather, setWeather] = useState({});

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
      { role: "MR", amount: "100 / 2 =  $50" },
      { role: "AR1", amount: 34 },
      { role: "AR2", amount: 20 },
    ],
    pendingTasks: ["Touch base with opponent", "Align with co-coaches/manager"],
  };

  useEffect(() => {
    const apiCall = async () => {
      try {
        const userdata = localStorage.getItem("user");
        if (userdata) {
          const parsedData = JSON.parse(userdata);
          const teamId = parsedData?.team?.[0]?.teamId;

          if (teamId) {
            const res = await axiosInstance.get(`/matches/next/${teamId}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
              },
            });
            if (res.data) {
              setNextMatch(res.data);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching next match:", error);
      }
    };

    const weatherApi = async () => {
      try {
        const userdata = localStorage.getItem("user");
        const res = await axiosInstance(
          `/weather?city=Hudson&date=2025-03-05`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            },
          }
        );
        setWeather(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
    weatherApi();
  }, []);
  return (
    <Stack spacing={3}>
      <Box>
        <MatchPreparation nextMatch={nextmatch} />
      </Box>

      <Box display="flex" gap={2} sx={{ flexWrap: "wrap" }}>
        <MatchWeather weather={weather} />
        <TeamStatus {...teamData} />
        <PreMatchChecklist {...checklistData} />
      </Box>
      <Teams />
      <Matches />
      <SportsAnalyticsDashboard />
    </Stack>
  );
};

export default Overview;
