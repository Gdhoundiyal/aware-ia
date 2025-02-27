import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import PrivateRoute from "./routes/PrivateRoutes";
import CustomNavbar from "./components/static/Navbar";
import Sidebar from "./components/dashboard/SideDrawer";
import { useState } from "react";
import DashboardLayout from "./components/dashboard/DashBoard";
import Teams from "./components/dashboard/Teams";
import Matches from "./components/dashboard/Matches";
import { Analytics } from "./components/dashboard/Analytics";
import { Settings } from "./components/dashboard/Settings";

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
            element={<DashboardLayout />
            }
          >
          <Route path="teams" element={<Teams />} />
          <Route path="matches" element={<Matches />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
