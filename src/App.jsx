import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/auth/signup";
import DashboardLayout from "./components/dashboard/DashBoard";
import Teams from "./components/dashboard/Teams";
import Matches from "./components/dashboard/Matches";
import { Analytics } from "./components/dashboard/Analytics";
import { Settings } from "./components/dashboard/Settings";
import OverView from "./components/dashboard/OverView";
import Login from "./components/auth/Login";

function App() {

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
          <Route path="" element={<OverView />} />
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
