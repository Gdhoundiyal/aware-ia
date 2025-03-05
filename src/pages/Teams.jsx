"use client"

import { useEffect, useState } from "react"
import { Box, Typography, Chip, IconButton, Select, MenuItem, FormControl } from "@mui/material"
import Table from "../components/table/Table"
import axiosInstance from "../axios/axiosInstance"
import MoreVertIcon from "@mui/icons-material/MoreVert"

const Teams = () => {
  const [teamData, setTeamData] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const teamStatus = async () => {
    try {
      const userdata = localStorage.getItem("user")
      if (userdata) {
        const parsedData = JSON.parse(userdata)
        const teamId = parsedData?.team?.[0]?.teamId

        const res = await axiosInstance(`/players/team/${teamId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        })
        setTeamData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    teamStatus()
  }, [])

  const handleStatusChange = async (event, playerId) => {
    const newStatus = event.target.value;
    setSelectedPlayer(playerId); // Set the selected player ID

    try {
      await axiosInstance.post('/players/changestatus', {
        status: newStatus,
        playerId: playerId,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        }
      });

      // Update the local state
      teamStatus();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  // Get status color based on status value
  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return { bg: "#e6f7ed", color: "#1e8e3e" }
      case "unavailable":
        return { bg: "#fce8e6", color: "#d93025" }
      case "suspended":
        return { bg: "#fef7e0", color: "#f9ab00" }
      case "injured":
        return { bg: "#e8eaed", color: "#5f6368" }
      default:
        return { bg: "#e8eaed", color: "#5f6368" }
    }
  }

  // Sample data for the table
  const columns = [
    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params) => {
        const statusColor = getStatusColor(params.value);
        return (
          <Box sx={{ display: "flex", alignItems: "center", height: '100%',justifyContent:"space-between" }}>
            <FormControl variant="filled" sx={{ ml: 1, minWidth: 120, bgcolor: "transparent" }}>
              <Select
                value={params.value}
                onChange={(e) => handleStatusChange(e, params.row.id)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  // marginLeft:"20px",
                  paddingBottom:"15px",
                  lineHeight:"2.4375em",
                  bgcolor: 'transparent',
                  '& .MuiSelect-select': {
                    bgcolor: 'transparent',
                  },
                }}
              >
                {["available", "unavailable", "suspended", "injured"].map((status) => (
                  <MenuItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )
      },
    },
    {
      field: "name",
      headerName: "Player Name",
      width: 180,
    },
    {
      field: "position",
      headerName: "Position",
      width: 130,
    },
    {
      field: "technical_skills",
      headerName: "Technical Skills",
      width: 130,
      type: "number",
    },
    {
      field: "athleticism",
      headerName: "Athleticism",
      width: 130,
      type: "number",
    },
    {
      field: "game_iq",
      headerName: "Game IQ",
      width: 130,
      type: "number",
    },
    {
      field: "work_rate",
      headerName: "Work Rate",
      width: 130,
      type: "number",
    },
    {
      field: "versatility",
      headerName: "Versatility",
      width: 130,
      type: "number",
    },
  ]

  const rows = teamData.map((player) => ({
    status: player.status || "available",
    name: player.name,
    position: player.position,
    technical_skills: player.technical_skills,
    athleticism: player.athleticism,
    game_iq: player.game_iq,
    work_rate: player.work_rate,
    versatility: player.versatility,
    id: player._id, // Ensure player ID is included
  }))

  // Get current soccer year
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1
  const soccerYear = `${currentYear}-${String(nextYear).slice(2)}`

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Player Assessment Table: {soccerYear}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Comprehensive evaluation of player attributes, skills, and Awareia Insight recommended roles
      </Typography>

      <Table rows={rows} columns={columns} paginationModel={{ page: 0, pageSize: 10 }} />
    </Box>
  )
}

export default Teams

