import Table from "../table/Table";
import { Box, Paper, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  upcomingMatchesColumns,
  upcomingMatchesRows,
  standingsColumns,
} from "../../assets/tableData";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

function Teams() {
  const [TableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LeagueData = async () => {
      try {
        setLoading(true);
        let user = JSON.parse(localStorage.getItem("user") || "{}");
        const teamId = user?.team?.[0]?.teamId;

        if (!teamId) {
          console.warn("No teamId found.");
          setTableData([]);
          setLoading(false);
          return;
        }

        const res = await axiosInstance.get(`/standing/${teamId}`);
        const formattedRows = Array.isArray(res.data)
          ? res.data.map((item) => ({
              ...item,
              id: item._id,
            }))
          : [];
        setTableData(formattedRows);
      } catch (error) {
        console.error("Error fetching league data:", error);
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };

    LeagueData();
  }, []);

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
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
            Upcoming Matches
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              cursor: "pointer",
            }}>
            <Typography>Calendar</Typography>
            <CalendarMonthIcon />
          </Box>
        </Box>
        <Table
          rows={upcomingMatchesRows}
          columns={upcomingMatchesColumns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>

      {/* League Standings Section */}
      <Paper
        sx={{
          p: { xs: 1, sm: 3 }, // Responsive padding
          borderRadius: 2,
          width: "100%",
        }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
          League Division Standings
        </Typography>
        <Table
          rows={loading ? [] : TableData}
          columns={standingsColumns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>
    </Box>
  );
}

export default Teams;
