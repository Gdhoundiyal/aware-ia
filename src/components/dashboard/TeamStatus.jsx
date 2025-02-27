import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import CircleIcon from "@mui/icons-material/Circle";

const TeamStatus = ({ available, injured, suspended, players }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "green";
      case "injured":
        return "red";
      case "suspended":
        return "goldenrod";
      default:
        return "gray";
    }
  };

  return (
    <Card sx={{maxWidth:"500px",p: 2, borderRadius: 3, boxShadow: 3,flexGrow:"1" }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Team Status
          </Typography>
          <GroupsIcon sx={{ color: "gray" }} />
        </Box>

        {/* Status Counts */}
        <Box display="flex" gap={3} mt={1} mb={2}>
          <Box textAlign="center">
            <Typography variant="h5" color="green" fontWeight="bold">
              {available}
            </Typography>
            <Typography variant="body2">Available</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" color="red" fontWeight="bold">
              {injured}
            </Typography>
            <Typography variant="body2">Injured</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" color="goldenrod" fontWeight="bold">
              {suspended}
            </Typography>
            <Typography variant="body2">Suspended</Typography>
          </Box>
        </Box>

        <Divider />

        {/* Player List */}
        {players.map((player, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={1}
            sx={{ bgcolor: "#f9f9f9", borderRadius: 1, mt: 1 }}
          >
            <Typography>{player.name}</Typography>
            <CircleIcon sx={{ fontSize: 12, color: getStatusColor(player.status) }} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamStatus;
