"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useDispatch } from "react-redux";
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/slices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";

const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
        setAlertMessage("Please fill all the details.");
        setAlertOpen(true);
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        setAlertMessage("Please enter a valid email address.");
        setAlertOpen(true);
        return;
    }

    // Call API without making the function `async`
    axiosInstance.post("/coach/login", formData)
        .then((res) => {
            if (res.data.token) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.coach));
                
                // Ensure token is stored before navigating
                navigate("/dashboard");
            } else {
                setAlertMessage("Login failed. Please try again.");
                setAlertOpen(true);
            }
        })
        .catch((error) => {
            setAlertMessage(error.response?.data?.message || "Login failed.");
            setAlertOpen(true);
        });
};



  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Section */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          bgcolor: "#1e40af",
          p: 12,
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" fontWeight="bold" mt={3}>
            Join the Future of
            <br />
            Soccer Coaching
          </Typography>
          <Box mt={4} sx={{ "& > *": { mt: 1 } }}>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              <TrendingUpIcon sx={{ fontWeight: 900 }} className="text-[#93c5fd] mr-2 " /> Opponent analysis and tactical insights
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              <PeopleIcon sx={{ fontWeight: 900 }} className="text-[#93c5fd] mr-2" /> Extensive team management tools
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>
              <EmojiEventsIcon sx={{ fontWeight: 900 }} className="text-[#93c5fd] mr-2" /> Performance tracking and analytics
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 4, md: 6 },
        }}
        className="bg-blue-50"
      >
        <Container 
          className="shadow-2xl rounded-xl bg-white pt-5"
          sx={{ 
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 4 },
            maxWidth: { xs: "100%", sm: "sm" }
          }}
        >
          <Box mb={4} sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" color="text.primary">
              Welcome Back
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              Sign in to continue to your account
            </Typography>
          </Box>

          {/* Progress Stepper */}

          <form className=" px-10" onSubmit={handleSubmit} sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
              <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                <Grid className=" rounded-lg " item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="coach@example.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Min. 8 characters"
                  />
                </Grid>
              
              </Grid>

            <Box sx={{ 
              mt: { xs: 3, sm: 4 }, 
              display: "flex", 
              justifyContent: "space-between",
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 2 }
            }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ 
                  bgcolor: "#1e40af",
                  mb: '10px',
                  width: { xs: '100%'}
                }}
              >
               Login
              </Button>
            </Box>

            {/* Add Login Link */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                Do not have any account?{' '}
                <Link to="/signup" className=" text-blue-800" >
                  Create account
                </Link>
              </Typography>
            </Box>
          </form>

          {/* Alert for validation messages */}
          <Alert 
              severity="error" 
              sx={{ 
                  display: alertOpen ? 'flex' : 'none',
                  mb: 2,
                  '& .MuiAlert-message': {
                      display: 'flex',
                      alignItems: 'center',
                      flex: 1
                  },
                  '& .MuiAlert-icon': {
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: 1
                  },
                  '& .MuiAlert-action': {
                      display: 'flex',
                      alignItems: 'center',
                      paddingTop: 0,
                      marginRight: 0
                  }
              }} 
              onClose={() => setAlertOpen(false)}
          >
              {alertMessage}
          </Alert>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
