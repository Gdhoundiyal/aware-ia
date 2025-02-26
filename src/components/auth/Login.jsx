import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const { login } = useAuth();

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={login}>
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
