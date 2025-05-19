import React, { useState } from "react";
import { FaMoon, FaSun, FaBell, FaLock, FaUser } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Enables Tailwind's dark mode
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Settings</h2>

      {/* Theme Toggle */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
        <span className="font-semibold flex items-center gap-2 dark:text-white">
          {darkMode ? <FaMoon /> : <FaSun />} Theme
        </span>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
        <span className="font-semibold flex items-center gap-2 dark:text-white">
          <FaBell /> Notifications
        </span>
        <button
          onClick={() => setNotifications(!notifications)}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all"
        >
          {notifications ? "Disable" : "Enable"}
        </button>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
        <span className="font-semibold flex items-center gap-2 dark:text-white">
          <FaLock /> Security & Privacy
        </span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">Manage</button>
      </div>

      {/* Account Management */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
        <span className="font-semibold flex items-center gap-2 dark:text-white">
          <FaUser /> Account Management
        </span>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
