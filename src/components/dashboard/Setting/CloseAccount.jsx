import {
    Typography,
    Paper,
    Button,
    Stack,
    Box,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

export const CloseAccount = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper
                sx={{
                    p: 3,
                    bgcolor: "#fee2e2",
                    border: "1px solid #fca5a5",
                    boxShadow: "none"
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <WarningIcon color="error" />
                    <Typography fontWeight="bold" color="error">
                        Close Account
                    </Typography>
                </Stack>
                <Typography variant="body2" color="error" mb={2}>
                    Permanently delete your account and all associated data
                </Typography>
                <Typography variant="body2" color="error">
                    This action cannot be undone. Once you delete your account, all of your data will be permanently deleted. This includes your profile, settings, team members, and all associated information. Before proceeding, please make sure you have backed up any important data.
                </Typography>
                <Button size="small" variant="contained" color="error" sx={{ mt: 2, textTransform: "capitalize" }}>
                    Close Account
                </Button>
            </Paper>
        </Box>
    );
};

