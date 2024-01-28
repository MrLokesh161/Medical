// DashboardPage.js

import React, { useState } from 'react';

const DashboardPage = () => {
  const [selectedUserType, setSelectedUserType] = useState('new');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here based on the searchQuery
    console.log('Searching for:', searchQuery);
    // You can perform additional actions such as fetching data, filtering, etc.
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Clinic</div>
          <button onClick={handleLogout} className="hover:underline cursor-pointer">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8 flex">
        {/* User Type Dropdowns - Full Width */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
              Select User Type:
            </label>
            <div className="flex">
              <select
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userType"
                value={selectedUserType}
                onChange={handleUserTypeChange}
              >
                <option value="new">New User</option>
                <option value="old">Existing User</option>
              </select>
            </div>
          </div>

          {/* Conditional Rendering based on selectedUserType */}
          {selectedUserType === 'new' && (
            <div>
              {/* Render New User Form */}
              <h3 className="text-xl font-semibold mb-4">New User Form</h3>
              {/* Form fields for new users */}
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter username"
              />

              <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="email">
                Email:
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email"
              />

              <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
              />

              <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="uploadImage">
                Xray images:
              </label>
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="uploadImage"
                type="file"
              />
            </div>
          )}

          {selectedUserType === 'old' && (
            <div>
              {/* Render Existing User Form */}
              <h3 className="text-xl font-semibold mb-4">Existing User Form</h3>
              {/* Form fields for existing users */}
              <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="usernameExisting">
                Username:
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usernameExisting"
                type="text"
                placeholder="Enter username"
              />

              <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="uploadImageExisting">
                Xray Image:
              </label>
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="uploadImageExisting"
                type="file"
              />
            </div>
          )}
          {/* Search Section */}
          <div className="flex items-center mt-8">
            <input
              className="border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search existing users..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
