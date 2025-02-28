"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Stack,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import axiosInstance from "../../axios/axiosInstance";

const Signup = () => {
  useEffect(() => {
    const allLeague = async () => {
      const res = await axiosInstance.get("/leagues");
      setLeague(res.data);
    };
    const allClubs = async () => {
      const res = await axiosInstance.get("/clubs");
      setClubs(res.data);
    };
    const allBirthYear = async () => {
      const res = await axiosInstance.get("/teams/age");
      setBirth(res.data);
    };
    const allTeams = async () => {
      const res = await axiosInstance.get("/teams");
      setTeams(res.data);
    };

    allLeague();
    allClubs();
    allBirthYear();
    allTeams();
  }, []);

  const [league, setLeague] = useState([]);
  const [birth, setBirth] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    leagueId : "",
    teamId: "",
    club: "",
    birthYear: "",
    gender: "",
    otp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("formdata",formData)
    try {
      const res = await axiosInstance.post("/coach", formData);
      console.log("res",res)
      setStep(step + 1);
    } catch (error) {
      console.error("Error registering coach:", error);
    
    }
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (step == 2) {
      handleSubmit(e);
    }
    else if (step<3){
        setStep(step+1);
      }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <TrendingUpIcon
                sx={{ fontWeight: 900 }}
                className="text-[#93c5fd] mr-2 "
              />{" "}
              Opponent analysis and tactical insights
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <PeopleIcon
                sx={{ fontWeight: 900 }}
                className="text-[#93c5fd] mr-2"
              />{" "}
              Extensive team management tools
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <EmojiEventsIcon
                sx={{ fontWeight: 900 }}
                className="text-[#93c5fd] mr-2"
              />{" "}
              Performance tracking and analytics
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
            maxWidth: { xs: "100%", sm: "sm" },
          }}
        >
          <Box mb={4} sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              Create your account
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              { step === 3 ?   ("Verify you account") : ("Get started with your free account")   } 
            </Typography>
          </Box>

          {/* Progress Stepper */}
          <Box
            sx={{
              width: { xs: "90%", sm: "80%" },
              mx: "auto",
              mb: { xs: 2, sm: 3 },
            }}
          >
            <Stepper activeStep={step - 1} sx={{ mb: 4 }}>
              <Step>
                <StepLabel
                  sx={{ "& .MuiStepIcon-root": { fontSize: "2rem" } }}
                ></StepLabel>
              </Step>
              <Step>
                <StepLabel
                  sx={{ "& .MuiStepIcon-root": { fontSize: "2rem" } }}
                ></StepLabel>
              </Step>
              <Step>
                <StepLabel
                  sx={{ "& .MuiStepIcon-root": { fontSize: "2rem" } }}
                ></StepLabel>
              </Step>
            </Stepper>
          </Box>

          <form onSubmit={handleNext} sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
            {step === 1 && (
              <Stack container spacing={{ xs: 1.5, sm: 2 }}>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                  />

                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                  />
                </Stack>
                <Stack item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="coach@example.com"
                  />
                </Stack>
                <Stack item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 555-5555"
                  />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Min. 8 characters"
                  />

                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                  />
                </Stack>
              </Stack>
            )}

            {step === 2 && (
              <Stack container spacing={{ xs: 1.5, sm: 2 }}>
                <Stack item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Select League"
                    name="leagueId"
                    value={formData.leagueId}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select a league</MenuItem>
                    {league.map((leagueItem) => (
                      <MenuItem key={leagueItem._id} value={leagueItem._id}>
                        {leagueItem.league_title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Stack item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Select Club"
                    name="club"
                    value={formData.club}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select a club</MenuItem>
                    {clubs.map((clubItem) => (
                      <MenuItem key={clubItem._id} value={clubItem._id}>
                        {clubItem.club_name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                  <TextField
                    select
                    label="Birth year"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleInputChange}
                    sx={{ width: "50%" }} // This replaces xs={6}
                  >
                    <MenuItem value="">Select birth year</MenuItem>
                    {birth.map((year) => (
                      <MenuItem key={year.key} value={year.key}>
                        {year.key}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    fullWidth
                    label="Player Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    sx={{ width: "50%" }} // This replaces xs={6}
                  >
                    <MenuItem value="">Select Player Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </TextField>
                </Stack>
                <Stack item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Select Your Primary Team"
                    name="teamId"
                    value={formData.teamId}
                    onChange={handleInputChange}
                    disabled={!formData.club || !formData.birthYear}
                  >
                    <MenuItem value="">Select a team</MenuItem>
                    {teams
                      .filter(
                        (team) =>
                          team.club_id == formData.club &&
                          team.age === formData.birthYear
                      )
                      .map((team) => (
                        <MenuItem key={team._id} value={team._id}>
                          {team.team_name}
                        </MenuItem>
                      ))}
                  </TextField>
                  {!formData.club || !formData.birthYear ? (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Select club and birth year to see available teams
                    </Typography>
                  ) : null}
                </Stack>
              </Stack>
            )}

            {step === 3 && (
              <Box
                sx={{
                  textAlign: "center",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <TextField
                  fullWidth
                  label="Verification Code"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter 6-digit code"
                  inputProps={{ maxLength: 6 }}
                  sx={{
                    input: {
                      textAlign: "center",
                      fontSize: "1.5rem",
                      letterSpacing: "0.5em",
                    },
                  }}
                />
                <Typography variant="body2" color="text.secondary" mt={2}>
                  Didn't receive the code?{" "}
                  <Button color="primary" sx={{ textTransform: "none" }}>
                    Resend
                  </Button>
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                mt: { xs: 3, sm: 4 },
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 2 },
              }}
            >
              {step > 1 && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleBack}
                  fullWidth={window.innerWidth < 600}
                  sx={{
                    borderRadius: "8px",
                    padding: { xs: "10px", sm: "12px" },
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ml: { sm: step === 1 ? 0 : "auto" },
                  bgcolor: "#1e40af",
                  mb: "10px",
                  width: { xs: "100%", sm: step === 1 ? "100%" : "auto" },
                }}
              >
                {step === 1
                  ? "Select Your Team"
                  : step === 2
                  ? "Verify Phone"
                  : "Complete Registration"}
              </Button>
            </Box>

            {/* Add Login Link */}
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link to="/login" className=" text-blue-800">
                  Login
                </Link>
              </Typography>
            </Box>
            {step === 2 ? (
              <Stack item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: 2,
                    bgcolor: "#f8fafc",
                    borderRadius: 1,
                    border: "1px solid #e2e8f0",
                    mt: "15px",
                  }}
                >
                  <Box component="span" sx={{ color: "info.main" }}>
                    ℹ️
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    If you coach multiple teams, you will be able to add your
                    others from your subscription profile screen
                  </Typography>
                </Box>
              </Stack>
            ) : (
              " "
            )}
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Signup;
