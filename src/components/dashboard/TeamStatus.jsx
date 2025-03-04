import React, { useEffect, useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TeamStatus = ({ teamData }) => {
  const [availableCount, setAvailableCount] = useState(0);
  const [injuredCount, setInjuredCount] = useState(0);
  const [suspendedCount, setSuspendedCount] = useState(0);

  useEffect(() => {
    setAvailableCount(filterPlayersByStatus("available").length);
    setInjuredCount(filterPlayersByStatus("injured").length);
    setSuspendedCount(filterPlayersByStatus("suspended").length);
  }, [teamData]);

  console.log("props:",teamData)
  const getStatusColor = (status) => {
    switch (status) {
      case "playing":
        return "yellow";
      case "un-fit":
        return "red";
      case "suspended":
        return "goldenrod";
      default:
        return "gray";
    }
  };

  const filterPlayersByStatus = (status) => {
    return teamData.filter(player => player.status === status);
  };

  const getFirstPlayerName = (status) => {
    const players = filterPlayersByStatus(status);
    if (players.length > 0) {
      return players.sort((a, b) => a.name.localeCompare(b.name))[0].name;
    }
    return "None";
  };

  return (
    <Card sx={{
      maxWidth:"500px", 
      p: 2, 
      borderRadius: 3, 
      boxShadow: 3, 
      flexGrow:"1",
      height: "450px",
      display: "flex",
      flexDirection: "column"
    }}>
      <CardContent sx={{ 
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Team Status
          </Typography>
          <GroupsIcon sx={{ color: "gray" }} />
        </Box>

        {/* Status Counts */}
        <Box display="flex" gap={3} mt={1} mb={2}
        sx={{ 
          overflow: "auto",
          "& .MuiAccordionDetails-root": {
            maxHeight: "200px",
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#bdbdbd",
              borderRadius: "3px",
            }
          }
        }}
        >
          <Box textAlign="center">
            <Typography variant="h5" color="green" fontWeight="bold">
              {availableCount}
            </Typography>
            <Typography variant="body2">Available</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" color="#2979ff" fontWeight="bold">
              {injuredCount}
            </Typography>
            <Typography variant="body2">Injured</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" color="red" fontWeight="bold">
              {suspendedCount}
            </Typography>
            <Typography variant="body2">Suspended</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" color="gray" fontWeight="bold">
              {suspendedCount}
            </Typography>
            <Typography variant="body2">Not Available</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Collapsible Sections Container */}
        <Box sx={{ 
          flex: 1,
          overflow: "auto",
          "& .MuiAccordionDetails-root": {
            maxHeight: "200px",
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#bdbdbd",
              borderRadius: "3px",
            }
          }
        }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: '#f8fff8' }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CircleIcon sx={{ fontSize: 12, color: "green" }} />
                <Typography>{getFirstPlayerName("available")}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {filterPlayersByStatus("available").map((player, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  sx={{ bgcolor: "#f9f9f9", borderRadius: 1, mt: 1 }}
                >
                  <Typography>{player.name}</Typography>
                  <CircleIcon sx={{ fontSize: 12, color: "green" }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: '#fff8f8' }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CircleIcon sx={{ fontSize: 12, color: "red" }} />
                <Typography variant="body2">{getFirstPlayerName("injured")}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {filterPlayersByStatus("injured").map((player, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  sx={{ bgcolor: "#f9f9f9", borderRadius: 1, mt: 1 }}
                >
                  <Typography>{player.name}</Typography>
                  <CircleIcon sx={{ fontSize: 12, color: "red" }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: '#fffdf8' }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CircleIcon sx={{ fontSize: 12, color: "goldenrod" }} />
                <Typography variant="body2">{getFirstPlayerName("suspended")}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {filterPlayersByStatus("suspended").map((player, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  sx={{ bgcolor: "#f9f9f9", borderRadius: 1, mt: 1 }}
                >
                  <Typography>{player.name}</Typography>
                  <CircleIcon sx={{ fontSize: 12, color: "goldenrod" }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: '#fffdf8' }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CircleIcon sx={{ fontSize: 12, color: "goldenrod" }} />
                <Typography variant="body2">{getFirstPlayerName("not-available")}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {filterPlayersByStatus("not-available").map((player, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  sx={{ bgcolor: "#f9f9f9", borderRadius: 1, mt: 1 }}
                >
                  <Typography>{player.name}</Typography>
                  <CircleIcon sx={{ fontSize: 12, color: "goldenrod" }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamStatus;
