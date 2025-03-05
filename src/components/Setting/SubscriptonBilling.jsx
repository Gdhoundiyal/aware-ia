import {
    Box,
    Typography,
    Paper,
    Button,
    Divider,
    Stack,
    TextField,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

export const SubscriptionBilling = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper sx={{ p: 3, mb: 3, border: "1px solid lightgray" }}>
                <Typography variant="h6" fontWeight="bold">
                    Subscription & Billing
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                    Manage your subscription and payment details.
                </Typography>

                {/* Plan Info */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Box>
                        <Typography fontWeight="bold">Professional</Typography>
                        <Typography variant="body2">$29.99/monthly</Typography>
                    </Box>
                    <Button
                        size="small"
                        sx={{ textTransform: "capitalize", color: "gray", border: "1px solid gray", fontWeight: "bold" }}
                    >
                        Change Plan
                    </Button>
                </Box>

                {/* Renewal Date */}
                <Box sx={{ display: "flex", alignItems: "center", p: 1, borderRadius: 1, bgcolor: "#f5f5f5" }}>
                    <AccessTimeFilledOutlinedIcon />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                        Your plan will renew on <strong>2024-12-31</strong>
                    </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Payment Method */}
                <Typography fontWeight="bold" mb={1}>
                    Payment Method
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <CreditCardIcon />
                    <Typography variant="body2">•••• 4242 | Expires 12/25</Typography>
                </Stack>

                {/* Card Details Input Fields */}
                {/* <Box mt={3}>
                    <TextField
                        size="small"
                        fullWidth
                        label="Card Number"
                        variant="outlined"
                        placeholder="1234 5678 9012 3456"
                        sx={{ mb: 2 }}
                    />
                    <Stack direction="row" spacing={2}>
                        <TextField
                            size="small"
                            fullWidth
                            label="Expiration Date"
                            variant="outlined"
                            placeholder="MM/YY"
                        />
                        <TextField
                            size="small"
                            fullWidth
                            label="CVV"
                            variant="outlined"
                            type="password"
                            placeholder="***"
                        />
                    </Stack>
                </Box> */}

                <Button
                    size="small"
                    sx={{ textTransform: "capitalize", color: "#000", border: "1px solid gray", mt: 4 }}
                    fullWidth
                >
                    Update Card
                </Button>
            </Paper>
        </Box>
    );
};
