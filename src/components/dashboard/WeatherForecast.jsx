import React from "react";
import { Card, CardContent, Typography, Box, Stack, Divider, Paper, useTheme, alpha } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import OpacityIcon from "@mui/icons-material/Opacity"
import AirIcon from "@mui/icons-material/Air"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import CloudIcon from "@mui/icons-material/Cloud"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import WbCloudyIcon from "@mui/icons-material/WbCloudy"

const MatchWeather = ({ weather }) => {
  console.log("weather",weather)
  const theme = useTheme()

  const formatDate = (dateString) => {
    const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getWeatherIcon = (condition) => {
    if (condition.includes("Clear") || condition.includes("Mainly Clear")) return <WbSunnyIcon />
    if (condition.includes("Cloudy") || condition.includes("Overcast")) return <CloudIcon />
    if (condition.includes("Fog")) return <CloudIcon />
    if (condition.includes("Drizzle") || condition.includes("Rain")) return <WaterDropIcon />
    return <ThunderstormIcon />
  }

  const getTemperatureColor = (temp) => {
    const temperature = Number.parseFloat(temp)
    if (temperature > 30) return theme.palette.error.main
    if (temperature > 20) return theme.palette.warning.main
    if (temperature > 10) return theme.palette.info.main
    return theme.palette.primary.main
  }

  const mainColor = getTemperatureColor(weather?.temperature)

  return (
    <Card
      sx={{
        maxWidth: "500px",
        width: "100%",
        borderRadius: 3,
        boxShadow: theme.shadows[4],
        overflow: "hidden",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(135deg, ${mainColor}, ${alpha(mainColor, 0.7)})`,
          py: 2,
          px: 3,
          color: "white",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <PlaceIcon fontSize="small" />
            <Typography variant="subtitle1" fontWeight="medium">
              {weather?.location || 'N/A'}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body2">{formatDate(weather?.date) || 'N/A'}</Typography>
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" align="center" fontWeight="bold" color="text.primary" sx={{ mb: 3 }}>
          Match Weather
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: 2,
            mb: 3,
            backgroundColor: alpha(mainColor, 0.1),
            borderRadius: 2,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {getWeatherIcon(weather?.current?.condition || '')}
              <Typography variant="h6">{weather?.current?.condition || 'N/A'}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThermostatIcon sx={{ color: mainColor, mr: 1 }} />
              <Typography variant="h4" fontWeight="bold" color={mainColor}>
                {weather?.current?.temperature || 'N/A'}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ mb: 3 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              Min
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="primary.main">
              {weather?.minTemperature || 'N/A'}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              Max
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="error.main">
              {weather?.maxTemperature || 'N/A'}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Stack direction="row" spacing={2} justifyContent="center">
          <Paper
            elevation={1}
            sx={{
              p: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: alpha(theme.palette.info.main, 0.1),
              borderRadius: 2,
            }}
          >
            <OpacityIcon color="info" />
            <Typography variant="body2" fontWeight="medium">
              Rain: {weather?.rainProbability || 'N/A'}
            </Typography>
          </Paper>
          <Paper
            elevation={1}
            sx={{
              p: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: alpha(theme.palette.success.main, 0.1),
              borderRadius: 2,
            }}
          >
            <AirIcon color="success" />
            <Typography variant="body2" fontWeight="medium">
              Wind: {weather?.current?.windSpeed || 'N/A'}
            </Typography>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default MatchWeather

