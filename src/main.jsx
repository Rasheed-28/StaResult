import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout & Pages
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import Results from "./pages/Results";
import FailureData from "./pages/Failure";
import Settings from "./pages/Settings";
import Sessions from "./pages/Sessions";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="students" element={<Students />} />
          <Route path="classes" element={<Classes />} />
          <Route path="results" element={<Results />} />
          <Route path="failure" element={<FailureData />} />
          <Route path="settings" element={<Settings />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);