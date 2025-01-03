import React, { useState } from "react";
import "./index.css"; 
const App = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecord = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      setRecords([...records, { ...formData, id: Date.now() }]);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Record Management</h1>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleAddRecord}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add Record
          </button>
        </div>

        {/* Records */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Records</h2>
          {records.length === 0 ? (
            <p className="text-gray-500">No records added yet. Start by filling the form above!</p>
          ) : (
            <ul className="space-y-4">
              {records.map((record) => (
                <li key={record.id} className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-lg">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{record.name}</p>
                    <p className="text-sm text-gray-600">{record.email}</p>
                    <p className="text-sm text-gray-600">{record.phone}</p>
                    <p className="text-sm text-gray-600">{record.message}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteRecord(record.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
