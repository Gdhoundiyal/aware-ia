import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({
  rows,
  columns,
  paginationModel = { page: 0, pageSize: 5 },
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      autoHeight
      noRowsOverlay={
        <Typography variant="body1" sx={{ p: 2 }}>
          No data available
        </Typography>
      }
      sx={{
        border: 0,
        "& .MuiDataGrid-cell": {
          borderBottom: "1px solid #f0f0f0",
          whiteSpace: "nowrap",
        },
        "& .MuiDataGrid-columnHeaders": {
          fontWeight: "bold",
          borderBottom: "none",
          whiteSpace: "nowrap",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold",
        },
        "& .MuiDataGrid-container--top [role=row], .MuiDataGrid-container--bottom [role=row]":
          {
            backgroundColor: "#e0e0e0",
          },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    />
  );
};

export default Table;
