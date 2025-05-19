import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../assets/logo.svg'; // Replace with your actual logo path

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/150x50?text=StorME" alt="StorME Logo" className="w-36 mb-4" />
          <h1 className="text-2xl font-bold text-blue-600">StorME</h1>
        </div>
        <Link
          to="/profile"
          className="text-sm text-blue-600 hover:underline"
        >
          View Profile
        </Link>
      </header>

      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Welcome to StorME</h2>
          <p className="text-sm text-gray-600 mt-1">
            A secure enterprise file management system built for smart data control, accessibility, and collaboration.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/upload"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold">📤 Upload Files</h3>
            <p className="text-sm mt-2">Securely upload your files to the system.</p>
          </Link>

          <Link
            to="/manage"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold">📁 Manage Files</h3>
            <p className="text-sm mt-2">View, search, and organize your stored documents.</p>
          </Link>

          <Link
            to="/download"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold">📥 Download Files</h3>
            <p className="text-sm mt-2">Access and download previously stored files.</p>
          </Link>

          <Link
            to="/settings"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition col-span-1 md:col-span-2"
          >
            <h3 className="text-lg font-bold">⚙️ Application Settings</h3>
            <p className="text-sm mt-2">Update preferences, themes, and manage account options.</p>
          </Link>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-xs mt-16">
        &copy; {new Date().getFullYear()} StorME. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
