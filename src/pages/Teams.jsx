"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Button,
} from "@mui/material";
import Table from "../components/table/Table";
import axiosInstance from "../axios/axiosInstance";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

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
        setTeamData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    teamStatus();
  }, []);

  const handleStatusChange = async (event, playerId) => {
    const newStatus = event.target.value;
    setSelectedPlayer(playerId); // Set the selected player ID

    try {
      await axiosInstance.post(
        "/players/changestatus",
        {
          status: newStatus,
          playerId: playerId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );

      // Update the local state
      teamStatus();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Get status color based on status value
  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return { bg: "#e6f7ed", color: "#1e8e3e" };
      case "unavailable":
        return { bg: "#fce8e6", color: "#d93025" };
      case "suspended":
        return { bg: "#fef7e0", color: "#f9ab00" };
      case "injured":
        return { bg: "#e8eaed", color: "#5f6368" };
      default:
        return { bg: "#e8eaed", color: "#5f6368" };
    }
  };

  // Sample data for the table
  const columns = [
    {
      field: "player_number",
      headerName: "Player #",
      width: 150,
    },
    {
      field: "position",
      headerName: "Position",
      width: 200,
    },
    {
      field: "status",
      headerName: "Availability (Select One)",
      width: 200,
      renderCell: (params) => {
        const statusColor = getStatusColor(params.value);
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}>
            <FormControl
              variant="filled"
              sx={{ minWidth: 120, bgcolor: "transparent" }}>
              <Select
                value={params.value}
                onChange={(e) => handleStatusChange(e, params.row.id)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  // marginLeft:"20px",
                  paddingBottom: "15px",
                  lineHeight: "2.4375em",
                  bgcolor: "transparent",
                  "& .MuiSelect-select": {
                    bgcolor: "transparent",
                  },
                }}>
                {["available", "unavailable", "suspended", "injured"].map(
                  (status) => (
                    <MenuItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() +
                        status.slice(1).replace("-", " ")}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>
        );
      },
    },
    {
      field: "player_prompt",
      headerName: "Player 360 Prompt",
      width: 250,
    },
    {
      field: "awareia_insight",
      headerName: "Awareia Insights",
      width: 250,
    },

  ];

  const rows = teamData.map((player) => ({
    status: player.status || "available",
    player_number: player.player_number,
    position: player.position + " " +  player.pos,
    player_prompt: player.player_prompt || "NA",
    awareia_insight: player.awareia_insight,
    id: player._id, // Ensure player ID is included
  }));

  // Get current soccer year
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const soccerYear = `${currentYear}-${String(nextYear).slice(2)}`;

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        background: "white",
        gap: 3,
        borderRadius: 2,
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        "@media (max-width: 600px)": {
          p: 1,
        },
      }}>
      {/* Header Section with Buttons */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
            Player Assessment Table: {soccerYear}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Comprehensive evaluation of player attributes, skills, and Awareia
            Insight recommended roles
          </Typography>
        </Box>

        {/* Buttons for Adding & Editing Players */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ fontSize: "0.75rem", padding: "4px 10px" }}>
            Add New Player
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disabled={!selectedPlayer}
            sx={{ fontSize: "0.75rem", padding: "4px 10px" }}>
            Edit Selected Player
          </Button>
        </Stack>
      </Stack>

      {/* Table Component */}
      <Table
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 15 }}
      />
    </Box>
  );
};

export default Teams;
