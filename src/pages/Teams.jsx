import React from 'react';
import { Box, Typography } from '@mui/material';
import Table from '../components/table/Table';

const Teams = () => {
  // Sample data for the table
  const columns = [
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      sortable: false
    },
    {
      field: 'playerName',
      headerName: 'Player Name',
      width: 180,
    },
    {
      field: 'position',
      headerName: 'Position',
      width: 130,
    },
    {
      field: 'technicalSkills',
      headerName: 'Technical Skills',
      width: 130,
      type: 'number',
    },
    {
      field: 'athleticism',
      headerName: 'Athleticism',
      width: 130,
      type: 'number',
    },
    {
      field: 'gameIQ',
      headerName: 'Game IQ',
      width: 130,
      type: 'number',
    },
    {
      field: 'workRate',
      headerName: 'Work Rate',
      width: 130,
      type: 'number',
    },
    {
      field: 'versatility',
      headerName: 'Versatility',
      width: 130,
      type: 'number',
    },
  ];

  const rows = [
    {
      id: 1,
      playerName: 'John Smith',
      position: 'Midfielder (MF)',
      technicalSkills: 4,
      athleticism: 4,
      gameIQ: 5,
      workRate: 4,
      versatility: 3,
    },
    {
      id: 2,
      playerName: 'Jake Doe',
      position: 'Forward (FW)',
      technicalSkills: 5,
      athleticism: 5,
      gameIQ: 5,
      workRate: 5,
      versatility: 2,
    },
    {
      id: 3,
      playerName: 'Alex Carter',
      position: 'Defender (DF)',
      technicalSkills: 3,
      athleticism: 4,
      gameIQ: 5,
      workRate: 5,
      versatility: 4,
    },
  ];

  // Get current soccer year
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const soccerYear = `${currentYear}-${String(nextYear).slice(2)}`;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Player Assessment Table: {soccerYear}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Comprehensive evaluation of player attributes, skills, and Awareia Insight recommended roles
      </Typography>
      
      <Table 
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 10 }}
      />
    </Box>
  );
};

export default Teams;