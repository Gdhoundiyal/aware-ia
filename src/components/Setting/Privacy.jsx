import { Box, Typography, Paper, Checkbox, FormControlLabel, Button } from "@mui/material";

const Privacy = () => {
  return (
    <Box sx={{ p: 1 }}>
    <Paper sx={{ p: 2,boxShadow:"none",border:"1px solid lightgray" }}>
      <Typography variant="h6" fontWeight="bold">
        Privacy Settings
      </Typography>
      
    </Paper>
    </Box>
  );
};

export default Privacy;
