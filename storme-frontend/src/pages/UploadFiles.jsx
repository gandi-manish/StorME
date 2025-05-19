import React, { useState } from 'react';

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setMessage('❌ Select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('kc-token'); // stored by Keycloak frontend adapter

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || '✅ Upload successful!');
      } else {
        setMessage(data.error || '❌ Upload failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Upload failed.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Upload a File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded ml-2"
      >
        Upload
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default UploadFiles;
