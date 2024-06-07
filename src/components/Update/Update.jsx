import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [updateSuccess, setUpdateSuccess] = useState(false);    
  const [formData, setFormData] = useState({
    id: '', // Default user ID, update as needed
    username: '',
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
    axios.put(`http://localhost:4446/api/update/${formData.id}`, formData)
      .then(response => {
        setUpdateSuccess(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className=" max-w-md mx-8 my-8  ml-90  bg-red-500  border-blue-800 ">
      <label className=" m-1 text-teal-700 ">
        <span className="text-gray-700">User ID:</span>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
           className="mt-1 block w-200 rounded-md border-blue-800"
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Age:</span>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={updateUser}>Update User</button>
      {updateSuccess && <p className="mt-2 text-green-600">User updated successfully!</p>}
    </div>
  );
}

export default Update;
