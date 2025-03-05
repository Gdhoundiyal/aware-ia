import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const Security = () => {
    return (
        <Box sx={{ p: 1 }}>
            <Paper sx={{ p: 2, boxShadow: "none", border: "1px solid lightgray" }}>
                <Typography variant="h6" fontWeight="bold">
                    Security Settings
                </Typography>
                
            </Paper>
        </Box>
    );
};

export default Security;
