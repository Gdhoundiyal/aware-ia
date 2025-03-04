import { Box, Typography, Paper, Checkbox, FormControlLabel, Button } from "@mui/material";

const Privacy = () => {
  return (
    <Box sx={{ p: 1 }}>
    <Paper sx={{ p: 2,boxShadow:"none",border:"1px solid lightgray" }}>
      <Typography variant="h6" fontWeight="bold">
        Privacy Settings
      </Typography>
      {/* <Typography variant="body2" color="textSecondary" mb={2}>
        Control what information you share with others.
      </Typography>

      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Allow search engines to index my profile"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Make my email address visible to others"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Enable two-factor authentication"
        />
      </Box>

      <Button variant="contained" size="small" sx={{ mt: 2 ,textTransform:"capitalize"}} color="primary">
        Save Changes
      </Button> */}
    </Paper>
    </Box>
  );
};

export default Privacy;
