import React, { useState } from 'react';
import axios from 'axios';

function User() {
  const [id, setId] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  const getUserById = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      setError('Authentication token not found');
      return;
    }
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    axiosInstance.get(`http://192.168.0.138:4446/api/user/${id}`)
      .then(response => {
        setUserDetails(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Error fetching user by ID');
        setUserDetails(null);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Get User by ID</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Enter User ID:</span>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <button
        onClick={getUserById}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get User
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userDetails && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p><span className="font-semibold">ID:</span> {userDetails.id}</p>
          <p><span className="font-semibold">Name:</span> {userDetails.name}</p>
          {userDetails.roles && Array.isArray(userDetails.roles) && (
            <p><span className="font-semibold">Roles:</span> {userDetails.roles.join(', ')}</p>
          )}
          <p><span className="font-semibold">Email:</span> {userDetails.email}</p>
          <p><span className="font-semibold">Password:</span> {userDetails.password}</p>
          <p><span className="font-semibold">Age:</span> {userDetails.age}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
  );
}

export default User;
