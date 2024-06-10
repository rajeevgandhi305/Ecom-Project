import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const deleteUser = (id) => {
    axios.delete(`http://192.168.0.138:4446/api/delete/${id}`)
      .then(response => {
        setDeleteSuccess(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        setDeleteSuccess(false); // Reset delete success state
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = event.target.userIdInput.value;
    deleteUser(id);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="mb-4">
          <input 
            type="text" 
            name="userIdInput" 
            placeholder="Enter User ID" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete User
          </button>
        </div>
      </form>
      {deleteSuccess && <p className="mt-4 text-green-500">User deleted successfully!</p>}
    </div>
  );
}

export default Delete;
  
