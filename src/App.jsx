import { Router, Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { EnterPin } from "./pages/auth/EnterPin";
import { CreatePin } from "./pages/auth/CreatePin";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardLayout } from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-pin" element={<EnterPin />} />
      <Route path="/create-pin" element={<CreatePin />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="transfer" element={<TransferPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route
          path="topup"
          element={<div className="text-2xl font-bold">Ini Halaman Top Up</div>}
        />
        <Route
          path="profile"
          element={
            <div className="text-2xl font-bold">Ini Halaman Profile</div>
          }
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
