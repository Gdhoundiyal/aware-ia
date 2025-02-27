import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";

const MatchWeather = ({ location, date, temperature, condition, windSpeed, humidity }) => {
  return (
    <Card sx={{maxWidth:"500px", p: 2, textAlign: "center", borderRadius: 3, boxShadow: 3,flexGrow:"1" }}>
      <CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1} color="gray">
          <PlaceIcon fontSize="small" />
          <Typography variant="body2">{location}</Typography>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">{date}</Typography>
        </Box>

        <Typography variant="h6" mt={2} fontWeight="bold">
          Match Weather
        </Typography>

        <WbCloudyIcon sx={{ fontSize: 40, color: "gray", my: 1 }} />

        <Typography variant="h3">{temperature}°C</Typography>
        <Typography variant="body1" color="textSecondary">
          {condition}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} mt={2} color="gray">
          <Box display="flex" alignItems="center" gap={0.5}>
            <AirIcon fontSize="small" />
            <Typography variant="body2">{windSpeed} km/h</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <OpacityIcon fontSize="small" />
            <Typography variant="body2">{humidity}%</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MatchWeather;
