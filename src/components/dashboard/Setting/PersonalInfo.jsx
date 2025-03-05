import { useState } from 'react';
import { Alert, Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material';

export const PersonalInfo = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [lengthError, setLengthError] = useState(false);

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        // Check password length (must be at least 8 characters)
        setLengthError(value.length > 0 && value.length < 8);
        // Check if passwords match
        setPasswordError(value !== confirmPassword && confirmPassword !== '');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordError(e.target.value !== newPassword);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Box component={Paper} sx={{ border: "1px solid lightgray", p: 2, borderRadius: "5px" }}>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Personal Information</Typography>
                <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>Update your personal information and contact details.</Typography>
                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Full Name</InputLabel>
                <TextField size='small' type='text' fullWidth placeholder="John Smith" />
                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Email Address</InputLabel>
                <TextField size='small' type='email' fullWidth placeholder="john@example.com" />
                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Phone Number (Used for 2FA)</InputLabel>
                <TextField size='small' type='text' fullWidth placeholder="+1 (555) 123-4567" />
                <Alert severity="warning" sx={{ marginTop: 2 }}>
                    This phone number is used for two-factor authentication. Changing it will require re-verification and temporary loss of 2FA access. Use E.164 format: +1234567890
                </Alert>
            </Box>

            {/* ==============Password section============= */}
            <Box component={Paper} sx={{ border: "1px solid lightgray", p: 2, borderRadius: "5px", mt: 2 }}>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Password</Typography>
                <Typography sx={{ fontSize: "14px", color: "gray", mb: 2 }}>Update your password to keep your account secure.</Typography>

                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Current Password</InputLabel>
                <TextField
                    size='small'
                    type="password"
                    fullWidth
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>New Password</InputLabel>
                <TextField
                    size='small'
                    type="password"
                    fullWidth
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                />
                {
                    lengthError && <Typography sx={{ marginTop: 1, color: "red", fontSize: "12px" }}>Password must be at least 8 characters</Typography>
                }
                <InputLabel sx={{ fontSize: "14px", fontWeight: 500 }}>Confirm New Password</InputLabel>
                <TextField
                    size='small'
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {passwordError && <Alert severity="error" sx={{ marginTop: 1 }}>Passwords must match</Alert>}

                <Button
                    variant="contained"
                    sx={{ marginTop: 2, textTransform: "capitalize" }}
                    fullWidth
                    disabled={passwordError || lengthError || !newPassword || !confirmPassword}
                >
                    Update Password
                </Button>
            </Box>
        </Box>
    );
};


