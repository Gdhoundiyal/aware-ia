import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import DashboardLayout from "./components/dashboard/DashBoard";
import Teams from "./pages/Teams";
import Matches from "./components/dashboard/Matches";
import Analytics from "./components/dashboard/Analytics";
import { Settings } from "./components/dashboard/Setting/Settings";
import OverView from "./components/dashboard/OverView";
import AuthGuard from "./Authguard";
import Login from "./components/auth/Login";
import Standings from "./components/dashboard/Standings";
import { PersonalInfo } from "./components/dashboard/Setting/PersonalInfo";
import { TeamManagement } from "./components/dashboard/Setting/TeamManagement";
import { ClubManagement } from "./components/dashboard/Setting/ClubManagement";
import { GuestAccess } from "./components/dashboard/Setting/GuestAccess";
import { DeepLearning } from "./components/dashboard/Setting/DeepLearning";
import { SubscriptionBilling } from "./components/dashboard/Setting/SubscriptonBilling";
import { CloseAccount } from "./components/dashboard/Setting/CloseAccount";
import Notifications from "./components/dashboard/Setting/Notification";
import Privacy from "./components/dashboard/Setting/Privacy";
import Security from "./components/dashboard/Setting/Security";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard requireAuth={false}>
              <Login />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard requireAuth={false}>
              <Login />
            </AuthGuard>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthGuard requireAuth={false}>
              <Signup />
            </AuthGuard>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AuthGuard requireAuth={true}>
              <DashboardLayout />
            </AuthGuard>
          }
        >
          <Route path="" element={<OverView />} />
          <Route path="teams" element={<Teams/>} />
          <Route path="matches" element={<Matches />} />
          <Route path="standings" element={<Standings/>} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} >
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="team-management" element={<TeamManagement />} />
          <Route path="club-management" element={<ClubManagement />} />
          <Route path="guest-access" element={<GuestAccess />} />
          <Route path="deep-learning" element={<DeepLearning />} />
          <Route path="subscription-billing" element={<SubscriptionBilling />} />
          <Route path="close-account" element={<CloseAccount />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="security" element={<Security />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
