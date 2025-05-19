import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">👤 Profile</h2>
        <p className="text-sm text-gray-600 mb-6">User Information</p>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800">Ada Shelby</p>
          <p className="text-sm text-gray-500">HR Department</p>
          <p className="text-sm text-gray-500">shelby.org</p>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm"
          onClick={() => alert('Redirect to dashboard or logout')}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
