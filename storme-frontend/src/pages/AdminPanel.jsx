import React, { useState, useEffect } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Simulated API Call
        setTimeout(() => {
            setUsers([
                { id: 1, name: "John Doe", role: "Admin", email: "john.doe@company.com" },
                { id: 2, name: "Jane Smith", role: "User", email: "jane.smith@company.com" },
                { id: 3, name: "Alice Brown", role: "User", email: "alice.brown@company.com" },
            ]);

            setLogs([
                "User 'John Doe' added a new file.",
                "Admin 'Jane Smith' removed a user.",
                "Alice Brown changed account settings.",
            ]);
        }, 1500);
    }, []);

    // Remove user function
    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
                <p className="text-gray-600 mb-4">Manage users and monitor system activities.</p>

                {/* User Management */}
                <h3 className="text-lg font-semibold text-gray-700">User Management</h3>
                <div className="overflow-auto bg-white rounded-md shadow-md mb-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-t">
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded ${
                                                user.role === "Admin"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-300 text-black"
                                            }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-3 text-center flex justify-center space-x-4">
                                        {user.role !== "Admin" && (
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                title="Promote to Admin"
                                            >
                                                <FaUserShield />
                                            </button>
                                        )}
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            title="Remove User"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* System Logs */}
                <h3 className="text-lg font-semibold text-gray-700">System Logs</h3>
                <div className="bg-gray-100 p-4 rounded-md">
                    <ul className="list-disc pl-5 text-gray-600">
                        {logs.map((log, index) => (
                            <li key={index}>{log}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
