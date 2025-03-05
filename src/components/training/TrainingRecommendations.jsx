import React from "react";
import { Box, Button, Card, CardContent, Typography, LinearProgress, Grid, Stack } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import TimerIcon from "@mui/icons-material/Timer";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const trainingPlans = [
  {
    title: "Quick Passing Triangle",
    intensity: "Medium Intensity",
    players: "6-12 Players",
    time: "20 min",
  },
  {
    title: "Shooting Under Pressure",
    intensity: "High Intensity",
    players: "8-16 Players",
    time: "25 min",
  },
];

const TrainingRecommendations = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {/* Training Recommendations Section */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" >Training Recommendations</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" startIcon={<RefreshIcon />} sx={{ backgroundColor: "#28a745" }}>
                Generate New Plan
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
            Recommended training plan based on recent performance
          </Typography>
          <Stack spacing={2}>
            {trainingPlans.map((plan, index) => (
              <Card key={index} variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" >
                    {plan.title}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      <WhatshotIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} /> {plan.intensity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <PeopleIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} /> {plan.players}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <TimerIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} /> {plan.time}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>

        {/* Training Objectives and Progress Tracking Section */}
        <Grid item xs={12} md={5}>
          <Box>
            <Typography variant="h6" >Training Objectives</Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <Typography variant="body2" color="text.secondary">
                <CheckCircleIcon color="success" fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} /> Improve ball movement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <CheckCircleIcon color="success" fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} /> Enhance shooting accuracy
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" >Progress Tracking</Typography>
            <LinearProgress variant="determinate" value={40} sx={{ mt: 1, height: 8, borderRadius: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainingRecommendations;