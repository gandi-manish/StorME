// ManageFiles.jsx
import React, { useState, useEffect } from 'react';

const ManageFiles = () => {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/files/list')
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
        setFilteredFiles(data);
        setError('');
      })
      .catch((err) => {
        console.error('Error fetching files:', err);
        setError('❌ Failed to fetch files.');
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = files.filter((file) =>
      file.original_filename.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFiles(filtered);
  };

  const handleDownload = (filename) => {
    window.open(`http://localhost:5000/api/files/download/${filename}`, '_blank');
  };

  const handleView = (filename) => {
    window.open(`http://localhost:5000/api/files/download/${filename}`, '_blank');
  };

  const handleDelete = (filename) => {
    fetch(`http://localhost:5000/api/files/delete/${filename}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        const updated = files.filter((file) => file.stored_filename !== filename);
        setFiles(updated);
        setFilteredFiles(updated);
        alert(data.message || '✅ File deleted.');
      })
      .catch((err) => {
        console.error('Delete error:', err);
        alert('❌ Delete failed.');
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📂 Manage Files</h2>
        <input
          type="text"
          placeholder="Search by filename"
          value={search}
          onChange={handleSearch}
          className="border px-3 py-1 rounded w-full mb-4"
        />
        {error && <p className="text-red-600">{error}</p>}
        {filteredFiles.length === 0 ? (
          <p>No files found.</p>
        ) : (
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Filename</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Size</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map((file, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{file.original_filename}</td>
                  <td className="p-2 border">{file.mimetype}</td>
                  <td className="p-2 border">{(file.size / 1024).toFixed(2)} KB</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleView(file.stored_filename)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(file.stored_filename)}
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleDelete(file.stored_filename)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageFiles;
