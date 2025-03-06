import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Table from "../table/Table";
import axiosInstance from "../../axios/axiosInstance";

function Matches() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const userData = localStorage.getItem("user");
      const parsedData = JSON.parse(userData);
      const teamId = parsedData?.team?.[0]?.teamId;

      try {
        const res = await axiosInstance(`/matches/all/${teamId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        });
        setData(res.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    apiCall();
  }, []);

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 120,
      sortable: false,
      valueGetter: (params) => {
        const date = new Date();
        return date
          .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .split("/")
          .join("-");
      },
    },
    {
      field: "time",
      headerName: "Time",
      width: 100,
      sortable: false,
      valueGetter: (params) => {
        const date = new Date();
        return date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
    {
      field: "opponentName",
      headerName: "Opponent",
      width: 200,
      sortable: false,
    },
    {
      field: "venue",
      headerName: "Venue",
      width: 120,
      sortable: false,
    },
    {
      field: "competition",
      headerName: "Competition",
      width: 150,
      sortable: false,
      valueGetter: () => "league",
    },
    {
      field: "preparationStatus",
      headerName: "Preparation Status",
      width: 160,
      sortable: false,
      valueGetter: () => "NA",
    },
  ];

  // Transform the data to include an id field required by DataGrid
  const rows = data.map((item, index) => ({
    ...item,
    id: item._id || index,
  }));

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        "@media (max-width: 600px)": {
          p: 1,
        },
      }}>
      <Paper
        sx={{
          p: { xs: 1, sm: 3 },
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
          <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
            Upcoming Matches
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              cursor: "pointer",
            }}></Box>
        </Box>
        <Table
          rows={rows}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>
    </Box>
  );
}

export default Matches;
