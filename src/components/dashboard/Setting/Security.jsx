import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const Security = () => {
    return (
        <Box sx={{ p: 1 }}>
            <Paper sx={{ p: 2, boxShadow: "none", border: "1px solid lightgray" }}>
                <Typography variant="h6" fontWeight="bold">
                    Security Settings
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" mb={2}>
                    Manage your password and authentication settings.
                </Typography>

                <Box mt={2}>
                    <TextField
                        size="small"
                        fullWidth
                        label="Current Password"
                        type="password"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        size="small"
                        fullWidth
                        label="New Password"
                        type="password"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        size="small"
                        fullWidth
                        label="Confirm New Password"
                        type="password"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Update Password
                    </Button>
                </Box> */}
            </Paper>
        </Box>
    );
};

export default Security;
