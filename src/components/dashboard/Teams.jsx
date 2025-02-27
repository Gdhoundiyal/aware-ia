import React from 'react';
import Table from '../table/Table';
import { Box, Paper, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { 
  upcomingMatchesColumns, 
  upcomingMatchesRows, 
  standingsColumns, 
  standingsRows 
} from '../../assets/tableData';
import { DataGrid } from '@mui/x-data-grid';

function Teams() {
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <Box sx={{ 
      p: 3, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 4,
      width: '100%',
      height :"100vh",
      maxWidth: '100vw',  // Use viewport width instead of percentage
      overflow: 'hidden',
      '@media (max-width: 600px)': {
        p: 1,  // Reduce padding on small screens
      }
    }}>
      {/* Upcoming Matches Section */}
      <Paper sx={{ 
        p: { xs: 1, sm: 3 },  // Responsive padding
        borderRadius: 2,
        width: '100%',
  
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
            Upcoming Matches
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            color: 'primary.main',
            cursor: 'pointer' 
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
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
          League Division Standings
        </Typography>
        <Table 
          rows={standingsRows} 
          columns={standingsColumns}
          paginationModel={{ page: 0, pageSize: 5 }}
        />
      </Paper>
    </Box>
  );
}

export default Teams;