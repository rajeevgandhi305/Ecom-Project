
// import React, { useState } from 'react';
// import axios from 'axios';
// import './rg.css';

// const Registration = ({ onRegister }) => {
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState(null);

//   const handleRegister = async (event) => {
//     event.preventDefault();
//     setMessage(null);  // Reset message
//     try {
//       const response = await axios.post('http://192.168.0.138:4446/api/register', {
//         age,
//         email,
//         password,
//       });
//       onRegister(response.data);
//       setMessage('Registration successful');
//     } catch (error) {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         setMessage(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
//       } else if (error.request) {
//         // Request was made but no response received
//         setMessage('Registration failed: No response from server');
//       } else {
//         // Other errors
//         setMessage(`Registration failed: ${error.message}`);
//       }
//     }
//   };

//   return (


//     <div className='Register bg-no-repeat bg-cover' style={{ backgroundImage: 'url(./src/assets/images/bg1.jpg)' }}>
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md w-full   bg-slate-50 shadow-md rounded px-8 py-6">
//         <h2 className="text-6xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black/ text-sm font-bold mb-2" htmlFor="age">
//               Age
//             </label>
//             <input
//               type="number"
//               id="age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Register
//             </button>
//             <a className="font-sans text-lg hover:text-red-800 font-bold" href="/login">Login</a>
//           </div>
//         </form>
//         {message && (
//           <div className={`mt-4 p-4 rounded ${message.includes('successful') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//             {message}
//           </div>
//         )}
//       </div>
//     </div>
//     </div>

//   );
// };

// export default Registration;


import React, { useState } from 'react';
import axios from 'axios';
import './rg.css';

const Registration = ({ onRegister }) => {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage(null);  // Reset message
    try {
      const response = await axios.post('http://192.168.0.138:4446/api/register', {
        age,
        email,
        password,
      });
      onRegister(response.data);
    
    } catch (error) {
      if (error.response) {
        setMessage(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // Request was made but no response received
        setMessage('Registration failed: No response from server');
      } 
      else{
          setMessage('Registration successful');
      }
    }
  };

  return (
    <div className='Register bg-no-repeat bg-cover min-h-screen' style={{ backgroundImage: 'url(./src/assets/images/bg1.jpg)' }}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-slate-50 shadow-md rounded px-8 py-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
              <a className="font-sans text-lg hover:text-red-800 font-bold" href="/">Login</a>
            </div>
          </form>
          {message && (
            <div className={`mt-4 p-4 rounded ${message.includes('successful') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
