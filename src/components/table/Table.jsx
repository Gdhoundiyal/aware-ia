import * as React from "react";
import { DataGrid} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";



const Table = ({ rows, columns, paginationModel = { page: 0, pageSize: 5 } }) => {
  return (

        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          autoHeight
          sx={{
         
            border: 0,
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #f0f0f0',
              whiteSpace: 'nowrap',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#fafafa',
              borderBottom: 'none',
              whiteSpace: 'nowrap',
            },
            '& .MuiDataGrid-main': {
              overflow: 'hidden'
            }
          }}
        />

  );
};

export default Table;
