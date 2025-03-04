import {
    Box,
    Button,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Chip,
} from "@mui/material";

export const GuestAccess = () => {
    const guests = [
        { name: "Guest User 1", email: "guest1@example.com", permission: "View Only" },
        { name: "Guest User 2", email: "guest2@example.com", permission: "Can Edit" },
    ];

    return (
        <Box p={1}>
            <Box sx={{ p: 2, border: "1px solid lightgray", borderRadius: "5px" }}>
                <Typography variant="h6" fontWeight="bold">
                    Guest Access
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                    Invite up to 5 guests to access your account with limited permissions.
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 2 }}>
                    <Table>
                        <TableBody>
                            {guests.map((guest, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography sx={{ color: "#000", fontSize: "14px" }}>{guest.name}</Typography>
                                        <Typography sx={{ color: "gray", fontSize: "14px" }}>{guest.email}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {/* <Button size="small" variant="outlined">
                                        {guest.permission}
                                    </Button> */}
                                        <Chip size="small" label={guest.permission} color="primary" variant="outlined" />
                                    </TableCell>
                                    <TableCell>
                                        <Button size="small" variant="outlined" color="error" sx={{ textTransform: "capitalize" }}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Button variant="contained" fullWidth sx={{ textTransform: "capitalize" }}>
                    Add Guest
                </Button>
            </Box>
        </Box>
    );
};
