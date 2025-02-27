import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Signup from "./components/auth/signup";
import DashboardLayout from "./components/dashboard/DashBoard";
import Teams from "./components/dashboard/Teams";
import Matches from "./components/dashboard/Matches";
import { Analytics } from "./components/dashboard/Analytics";
import { Settings } from "./components/dashboard/Settings";
import OverView from "./components/dashboard/OverView";
import AuthGuard from "./Authguard";

function App() {

  return (
    <Router>
      <AuthProvider>
    <Routes>
      <Route path="/" element={<AuthGuard requireAuth={false}><Login /></AuthGuard>} />
      <Route path="/login" element={<AuthGuard requireAuth={false}><Login /></AuthGuard>} />
      <Route path="/signup" element={<AuthGuard requireAuth={false}><Signup /></AuthGuard>} />

      <Route path="/dashboard" element={<AuthGuard requireAuth={true}><DashboardLayout /></AuthGuard>}>
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
