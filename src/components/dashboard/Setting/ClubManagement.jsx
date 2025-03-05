import { Box,Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export const ClubManagement = () => {
  const members = [
    { name: "Sarah Connor", team: "Junior Varsity", status: "Active", color: "green" },
    { name: "Mike Johnson", team: "Varsity", status: "Active", color: "green" },
    { name: "Emily Brown", team: "Freshman", status: "Pending", color: "orange" },
  ];

  return (
    <Box sx={{p:3}}>
    <Box component={Paper} sx={{ border: "1px solid lightgray", p: 2, borderRadius: "5px" }}>
      <Typography variant="h6" fontWeight="bold">
        Club Management
      </Typography>
      <Typography sx={{fontSize:"14px",color:"gray",mb:2}}>
        View your fellow club members
      </Typography>

      <TableContainer sx={{ mt: 1,border:"1px solid lightgray",borderRadius:"5px" }}>
        <Table>
          <TableHead>
            <TableRow sx={{bgcolor:"#e9eff2"}}>
              <TableCell sx={{color:"gray"}}>Name</TableCell>
              <TableCell sx={{color:"gray"}}>Team</TableCell>
              <TableCell sx={{color:"gray"}}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell sx={{color:"gray"}}>{member.team}</TableCell>
                <TableCell sx={{ color: member.color }}>{member.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
};

