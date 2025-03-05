import { useState } from "react";
import { Box, Typography, Paper, FormControlLabel, Switch } from "@mui/material";

const Notifications = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);

    return (
        <Box sx={{ p: 1 }}>
            <Paper sx={{ p: 2, boxShadow: "none", border: "1px solid lightgray" }}>
                <Typography variant="h6" fontWeight="bold">
                    Notifications
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" mb={2}>
                    Manage your notification preferences.
                </Typography>
                <Box>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                            />
                        }
                        label="Email Notifications"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={smsNotifications}
                                onChange={(e) => setSmsNotifications(e.target.checked)}
                            />
                        }
                        label="SMS Notifications"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={pushNotifications}
                                onChange={(e) => setPushNotifications(e.target.checked)}
                            />
                        }
                        label="Push Notifications"
                    />
                </Box> */}
            </Paper>
        </Box>
    );
};

export default Notifications;
