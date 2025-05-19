import { NavLink } from "react-router-dom";
import { FaHome, FaUpload, FaFolder, FaUser, FaCog, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">StorME</h1>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaUpload />
          <span>Upload Files</span>
        </NavLink>

        <NavLink
          to="/manage"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaFolder />
          <span>Manage Files</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "flex items-center space-x-2 p-3 bg-blue-500 rounded-md" 
                     : "flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
          }
        >
          <FaUsers />
          <span>Admin Panel</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
