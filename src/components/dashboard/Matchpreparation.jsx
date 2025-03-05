"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Grid,
  Paper,
  useTheme,
  Stack,
  Chip
} from "@mui/material"

const MatchPreparation = ({ nextMatch }) => {
  const theme = useTheme()
  const [matchStatus, setMatchStatus] = useState("On")
  const [fixtureType, setFixtureType] = useState("League")

  const formatDate = (dateString) => {
    if (!dateString) return ""
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
    } catch (error) {
      return ""
    }
  }

  const formatDateTime = (dateString) => {
    if (!dateString) return "TBD"
    try {
      const date = new Date(dateString)
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    } catch (error) {
      return "TBD"
    }
  }

  const currentDate = formatDate(new Date())

  const handleMatchStatusChange = (event) => {
    setMatchStatus(event.target.value)
  }

  const handleFixtureTypeChange = (event) => {
    setFixtureType(event.target.value)
  }

  return (
    <Card sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Next Match Prep
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary", mb: 2, display:'inline' }}>
              vs{" "}
            </Typography>
            <Typography variant="h6" sx={{ color: "green", mb: 2, display : 'inline-block' }}>
             {nextMatch?.opponentName || "No upcoming matches found"}
            </Typography>
            <Paper elevation={0} sx={{ p: 2, bgcolor: theme.palette.grey[100], borderRadius: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                Status as of: {currentDate}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                <strong>Location:</strong> {nextMatch.match_location || "Not Found"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                <strong>Date/Time:</strong> {nextMatch.match_time ? formatDateTime(nextMatch.match_time) : "Not Found"}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Match Status
              </Typography>
              <RadioGroup row value={matchStatus} onChange={handleMatchStatusChange}>
                <FormControlLabel value="On" control={<Radio />} label="On" />
                <FormControlLabel value="Canceled/TBS" control={<Radio />} label="Canceled/TBS" />
                <FormControlLabel value="Forfeit" control={<Radio />} label="Forfeit" />
                <FormControlLabel value="Rescheduled" control={<Radio />} label="Rescheduled" />
              </RadioGroup>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Fixture Type
              </Typography>
              <Stack direction="row" spacing={1}>
                {["League", "Cup", "Tournament"].map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    variant={(nextMatch?.fixtureType || "League") === type ? "filled" : "outlined"}
                    color={(nextMatch?.fixtureType || "League") === type ? "primary" : "default"}
                    sx={{
                      bgcolor: (nextMatch?.fixtureType || "League") === type ? theme.palette.primary.main : "transparent",
                      color: (nextMatch?.fixtureType || "League") === type ? "white" : "text.primary",
                      cursor: "default",
                      '&:hover': { bgcolor: (nextMatch?.fixtureType || "League") === type ? theme.palette.primary.main : "transparent" }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MatchPreparation

