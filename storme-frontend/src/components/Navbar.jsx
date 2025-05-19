import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">StorME</h1>
      <div className="space-x-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Upload Files
        </NavLink>

        <NavLink
          to="/manage"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Manage Files
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
