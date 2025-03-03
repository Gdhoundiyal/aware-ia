import React, { useEffect, useState } from 'react';
import Table from '../table/Table';
import { Box, Paper, Typography } from '@mui/material';
import axiosInstance from '../../axios/axiosInstance';

const Standings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            const userData = localStorage.getItem('user');
            const parsedData = JSON.parse(userData);
            const teamId = parsedData?.team?.[0]?.teamId;

            try {
                const res = await axiosInstance(`/standing/${teamId}`);
                // Sort the data by position
                const sortedData = res.data.sort((a, b) => Number(a.position) - Number(b.position));
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching standings:", error);
            }
        };

        apiCall();
    }, []);

    const columns = [
        {
            field: 'position',
            headerName: 'Pos',
            width: 70,
            sortable: false,
        },
        {
            field: 'team_name',
            headerName: 'Team',
            width: 300,
            sortable: false,
        },
        {
            field: 'W',
            headerName: 'W',
            width: 70,
            sortable: false,
        },
        {
            field: 'L',
            headerName: 'L',
            width: 70,
            sortable: false,
        },
        {
            field: 'D',
            headerName: 'D',
            width: 70,
            sortable: false,
        },
        {
            field: 'GA',
            headerName: 'GA',
            width: 70,
            sortable: false,
        },
        {
            field: 'GF',
            headerName: 'GF',
            width: 70,
            sortable: false,
        },
        {
            field: 'GD',
            headerName: 'GD',
            width: 100,
            sortable: false,
         
        },
        {
            field: 'PTS',
            headerName: 'PTS',
            width: 70,
            sortable: false,
        },
        {
            field: 'QP',
            headerName: 'QP',
            width: 70,
            sortable: false,
            valueGetter: () => '21'
        }
    ];

    // Transform the data to include an id field required by DataGrid
    const rows = data.map(item => ({
        ...item,
        id: item._id
    }));

    return (
        <Box sx={{ 
            p: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 4,
            width: '100%',
            height: "100vh",
            maxWidth: '100vw',
            overflow: 'hidden',
            '@media (max-width: 600px)': {
                p: 1,
            }
        }}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
                    League Division Standings
                </Typography>
                <Table 
                    rows={rows} 
                    columns={columns}
                    paginationModel={{ page: 0, pageSize: 10 }}
                />
            </Paper>
        </Box>
    );
};

export default Standings;