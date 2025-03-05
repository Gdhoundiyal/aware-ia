import {
    Box,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Chip,
    Paper,
} from "@mui/material";

export const GuestAccess = () => {
    const guests = [
        { name: "Guest User 1", email: "guest1@example.com", permission: "View Only" },
        { name: "Guest User 2", email: "guest2@example.com", permission: "Can Edit" },
    ];

    return (
        <Box p={3}>
            <Box component={Paper} sx={{ p: 2, border: "1px solid lightgray", borderRadius: "5px" }}>
                <Typography variant="h6" fontWeight="bold">
                    Guest Access
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                    Invite up to 5 guests to access your account with limited permissions.
                </Typography>

                <TableContainer sx={{ mb: 2 }}>
                    <Table>
                        <TableBody>
                            {guests.map((guest, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography sx={{ color: "#000", fontSize: "14px" }}>{guest.name}</Typography>
                                        <Typography sx={{ color: "gray", fontSize: "14px" }}>{guest.email}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip size="small" label={guest.permission} sx={{ bgcolor: guest.permission === "View Only" ? "#E5E7EB" : "#DBEAFE", color: guest.permission === "View Only" ? "gray" : "#2554D9",fontWeight:600 }} />
                                    </TableCell>
                                    <TableCell>
                                        <Button size="small" variant="outlined" color="error" sx={{ textTransform: "capitalize", bgcolor: "#fee2e2", }}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Button size="small" variant="contained" fullWidth sx={{ textTransform: "capitalize" }}>
                    Add Guest
                </Button>
            </Box>
        </Box>
    );
};
