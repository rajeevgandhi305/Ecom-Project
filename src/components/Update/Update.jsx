import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [updateSuccess, setUpdateSuccess] = useState(false);    
  const [formData, setFormData] = useState({
    id: '', // Default user ID, update as needed
    age: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const updateUser = () => {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from localStorage

    axios.put(`http://192.168.0.138:4446/api/update/${formData.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request headers
      }
    })
    .then(response => {
      setUpdateSuccess(true);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error updating user:', error);
    });
  };

  return (
    <div className='Register bg-no-repeat bg-cover min-h-screen' style={{ backgroundImage: 'url(./src/assets/images/bg1.jpg)' }}>
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-slate-50 shadow-md rounded px-8 py-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Update</h2>
        <label className=" mb-3">
          <span className="block text-black text-sm font-bold mb-2">User ID:</span>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className=" mb-3">
        <span className="block text-black text-sm font-bold mb-2">Age:</span>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className=" mb-3">
        <span className="block text-black text-sm font-bold mb-2">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className=" mb-3">
        <span className="block text-black text-sm font-bold mb-2">Password:</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={updateUser}
        >
          Update User
        </button>
        {updateSuccess && <p className="mt-2 text-green-600 font-bold text-center">User updated successfully!</p>}
      </div>
    </div>
    </div>
  );
}

export default Update;
