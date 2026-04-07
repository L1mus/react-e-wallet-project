import { Router, Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { EnterPin } from "./pages/auth/EnterPin";
import { CreatePin } from "./pages/auth/CreatePin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-pin" element={<EnterPin />} />
      <Route path="/create-pin" element={<CreatePin />} />
    </Routes>
  );
}

export default App;
