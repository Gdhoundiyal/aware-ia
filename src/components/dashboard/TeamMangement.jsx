import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import { Box, Paper, Typography, Button } from "@mui/material";
import axiosInstance from "../../axios/axiosInstance";

const columns = [
  { field: "player_number", headerName: "Player #", flex: 1 },
  { field: "positions", headerName: "Position", flex: 1 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "current_form", headerName: "Current Form", flex: 1 },
  { field: "fitness", headerName: "Fitness", flex: 1 },
  { field: "recommendation", headerName: "AI Recommendation", flex: 1, valueGetter: ()=> "Start"  },
];

// const rows = [
//   {
//     id: 1,
//     player: "John Smith",
//     position: "Forward",
//     age: 24,
//     currentForm: "Excellent",
//     fitness: "95%",
//     recommendation: "Start",
//   },
//   {
//     id: 2,
//     player: "Mike Johnson",
//     position: "Midfielder",
//     age: 28,
//     currentForm: "Good",
//     fitness: "88%",
//     recommendation: "Start",
//   },
//   {
//     id: 3,
//     player: "David Williams",
//     position: "Defender",
//     age: 22,
//     currentForm: "Average",
//     fitness: "92%",
//     recommendation: "Rotation",
//   },
// ];

const TeamMangement = () => {
  const [teamData, setTeamData] = useState([]);

  const teamStatus = async () => {
    try {
      const userdata = localStorage.getItem("user");
      if (userdata) {
        const parsedData = JSON.parse(userdata);
        const teamId = parsedData?.team?.[0]?.teamId;

        const res = await axiosInstance(`/players/team/${teamId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        });
        console.log('response', res.data)
        setTeamData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    teamStatus();
  },[])

  const rows = teamData.map((item, index) => ({
    ...item,
    id: index,
    positions : item.position + " " + `(${item.pos})`
  }));

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        maxWidth: "100vw", // Use viewport width instead of percentage
        "@media (max-width: 600px)": {
          p: 1, // Reduce padding on small screens
        },
      }}>
      {/* Upcoming Matches Section */}
      <Paper
        sx={{
          p: { xs: 1, sm: 3 }, // Responsive padding
          borderRadius: 2,
          width: "100%",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
            Game Day LineUp
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              cursor: "pointer",
            }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}>
              AI Lineup Suggestion
            </Button>
          </Box>
        </Box>
        <Table
          rows={rows}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>
    </Box>
  );
};

export default TeamMangement;
