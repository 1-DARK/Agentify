import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";

import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/clerk-react";

const adminRoute = import.meta.env.VITE_ADMIN_ROUTE;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/auth/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />
        {/* Admin Routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
