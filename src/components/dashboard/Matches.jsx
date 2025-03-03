import { Box, Paper, Typography, Button } from "@mui/material";
import Table from "../table/Table";
import {
  playerManagementColumns,
  playerManagementRows,
} from "../../assets/tableData";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Matches() {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        maxWidth: "100vw", // Use viewport width instead of percentage
        "@media (max-width: 600px)": {
          p: 1, // Reduce padding on small screens
        },
      }}>
      {/* Upcoming Matches Section */}
      <Paper
        sx={{
          p: { xs: 1, sm: 3 }, // Responsive padding
          borderRadius: 2,
          width: "100%",
          overflow: "hidden",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
            Team Mangement
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              cursor: "pointer",
            }}>
            <Button
              variant="contained"
              startIcon={<AutoAwesomeIcon />}
              sx={{
                backgroundColor: "#1a56db",
                "&:hover": {
                  backgroundColor: "#1e40af",
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
              }}>
              AI Lineup Suggestion
            </Button>
          </Box>
        </Box>
        <Table
          rows={playerManagementRows}
          columns={playerManagementColumns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>
    </Box>
  );
}

export default Matches;
