// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer"; // ✅ Import Footer

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UploadFiles from "./pages/UploadFiles";
import ManageFiles from "./pages/ManageFiles";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadFiles />} />
            <Route path="/manage" element={<ManageFiles />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
      <Footer /> {/* ✅ Add Footer at the bottom */}
    </div>
  );
}

export default App;
