import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import DashboardLayout from "./components/dashboard/DashBoard";
import Teams from "./pages/Teams";
import Matches from "./components/dashboard/Matches";
import Analytics from "./components/dashboard/Analytics";
import { Settings } from "./components/Setting/Settings";
import OverView from "./components/dashboard/OverView";
import AuthGuard from "./Authguard";
import Login from "./components/auth/Login";
import Standings from "./components/dashboard/Standings";
import { PersonalInfo } from "./components/Setting/PersonalInfo";
import { TeamManagement } from "./components/Setting/TeamManagement";
import { ClubManagement } from "./components/Setting/ClubManagement";
import { GuestAccess } from "./components/Setting/GuestAccess";
import { DeepLearning } from "./components/Setting/DeepLearning";
import { SubscriptionBilling } from "./components/Setting/SubscriptonBilling";
import { CloseAccount } from "./components/Setting/CloseAccount";
import Notifications from "./components/Setting/Notification";
import Privacy from "./components/Setting/Privacy";
import Security from "./components/Setting/Security";
import PreMatchChecklist from "./components/feedback/PostMatchFeedback";
import TrainingRecommendations from "./components/training/TrainingRecommendations";
import TacticalDeepDives from './components/forumPost/TacticalDeepDives'
import { AwarianForam } from "./components/forumPost/Foram";

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
          <Route path="training" element={<TrainingRecommendations />} />
          <Route path="forum" element={<AwarianForam />} />
          <Route path="feedback" element={<PreMatchChecklist />} />
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
