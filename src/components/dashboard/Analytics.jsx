"use client"

import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

export default function SportsAnalyticsDashboard() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  // Initial pie chart data
  const initialPieChartData = [
    { id: 0, value: 40, label: "4-3-3", color: "#1976d2", active: true },
    { id: 1, value: 30, label: "4-2-3-1", color: "#78909c", active: true },
    { id: 2, value: 15, label: "3-5-2", color: "#2e7d32", active: true },
    { id: 3, value: 15, label: "Other", color: "#d32f2f", active: true },
  ]

  // State for pie chart data with active status
  const [pieChartData, setPieChartData] = useState(initialPieChartData)

  // Toggle active status of a pie chart segment
  const toggleSegmentActive = (id) => {
    setPieChartData((prevData) => prevData.map((item) => (item.id === id ? { ...item, active: !item.active } : item)))
  }

  // Prepare data for the chart
  const chartData = pieChartData.map((item) => ({
    id: item.id,
    value: item.active ? item.value : 0,
    label: item.label,
    color: item.active ? item.color : "#e0e0e0", // Light grey for inactive
  }))

  // Data for strengths and weaknesses
  const strengths = ["Strong aerial presence in set pieces", "Quick counter-attacking style"]

  const weaknesses = ["Vulnerable to high press", "Poor defensive transitions"]

  // Data for tactical comparison
  const tacticalComparison = [
    { category: "Possession Style", value: "Possession-based" },
    { category: "Pressing Intensity", value: "High Press" },
    { category: "Build-up Play", value: "Short Passing" },
  ]

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {/* Opponent Strengths & Weaknesses */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Opponent Strengths & Weaknesses
              </Typography>
              <List>
                {strengths.map((strength, index) => (
                  <ListItem
                    key={`strength-${index}`}
                    sx={{
                      bgcolor: "rgba(46, 125, 50, 0.1)",
                      borderRadius: 1,
                      mb: 1,
                      py: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={strength} />
                  </ListItem>
                ))}
                {weaknesses.map((weakness, index) => (
                  <ListItem
                    key={`weakness-${index}`}
                    sx={{
                      bgcolor: "rgba(211, 47, 47, 0.1)",
                      borderRadius: 1,
                      mb: 1,
                      py: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <ErrorOutlineIcon color="error" />
                    </ListItemIcon>
                    <ListItemText primary={weakness} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Tactical Trends */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tactical Trends
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: isMobile ? 200 : 250,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <PieChart
                    series={[
                      {
                        data: chartData,
                        highlightScope: { faded: "global", highlighted: "item" },
                        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                        animated: true,
                      },
                    ]}
                    width={isMobile ? 200 : isTablet ? 300 : 350}
                    height={isMobile ? 200 : isTablet ? 200 : 250}
                    margin={{ right: 5 }}
                    legend={{ hidden: true }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 1,
                  }}
                >
                  {pieChartData.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Tooltip title={item.active ? "Click to disable" : "Click to enable"}>
                        <IconButton
                          onClick={() => toggleSegmentActive(item.id)}
                          size="small"
                          sx={{
                            width: 16,
                            height: 16,
                            bgcolor: item.color,
                            "&:hover": {
                              bgcolor: item.color,
                              opacity: 0.8,
                            },
                          }}
                        />
                      </Tooltip>
                      <Typography
                        variant="body2"
                        sx={{
                          color: item.active ? "text.primary" : "text.secondary",
                          textDecoration: item.active ? "none" : "line-through",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Table size="small">
                <TableBody>
                  {tacticalComparison.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: "none", pl: 0 }}>
                        <Typography variant="body2" color="text.secondary">
                          {row.category}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ border: "none", pr: 0 }}>
                        <Typography variant="body2" fontWeight="medium">
                          {row.value}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

