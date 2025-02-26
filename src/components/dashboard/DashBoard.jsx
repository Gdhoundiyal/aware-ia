import { useAuth } from "../../context/AuthContext";
import { Container, Button, Typography, Box } from "@mui/material";
import Sidebar from "./Sidedrawer";

const Dashboard = () => {
  // const { logout } = useAuth();

  return (
    <Container maxWidth="sm">
      <Sidebar/>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" gutterBottom>Welcome to Dashboard</Typography>
        <Button variant="contained" color="error" >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
