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
      <Route index element={<LandingPage />} />
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
          element={<div></div>}
        />
        <Route
          path="profile"
          element={
            <div></div></div>
          }
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
