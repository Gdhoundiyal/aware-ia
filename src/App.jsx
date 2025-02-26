import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import PrivateRoute from "./routes/PrivateRoutes";
import CustomNavbar from "./components/static/Navbar";
import Sidebar from "./components/dashboard/SideDrawer";
import { useState } from "react";

function App({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="login" element={<Login/>} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>

                <Box sx={{ display: "flex", height: "100vh" }}>
                  {/* sidebar */}

                  <Box>
                  <Sidebar
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                  />
                  </Box>
                  <Box sx={{ display: "flex", height: "100vh", flexDirection:"column",flexGrow:"3" }}>
                    {/* navbar */}

                    <Box>
                    <CustomNavbar onMenuClick={handleDrawerToggle} />
                    </Box>
                   {/*main content  */}
                   
                    <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      p: 3,
                    }}
                  >
                    <Toolbar />
                    {children}
                  </Box>
                  </Box>
                  
                </Box>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
