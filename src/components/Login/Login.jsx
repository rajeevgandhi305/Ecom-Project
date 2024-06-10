// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://192.168.0.138:4446/api/login', {
//         username,
//         password,
//       });
//       const token = response.data;
//       localStorage.setItem('jwtToken', token);
//       navigate('/hero'); 
//     } catch (error) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
    
//     // <div className='login bg-no-repeat bg-cover'style={{ backgroundImage: 'url(./src/assets/images/bg2.jpg)' }}>
//     <div className='Register bg-no-repeat bg-cover' style={{ backgroundImage: 'url(./src/assets/images/bg1.jpg)' }}>
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="max-w-md w-full bg-slate-50 shadow-md rounded px-8 py-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
//               Login
//             </button>
//             <a className='font-sans text-lg hover:text-red-800 font-bold' href="/">Register</a>
//           </div>
//           {error && <div className="text-red-500 mt-4">{error}</div>}
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.138:4446/api/login', {
        username,
        password,
      });
      const token = response.data;
      localStorage.setItem('jwtToken', token);
      setError('Login Success');
      navigate('/hero'); 
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='Register bg-no-repeat bg-cover min-h-screen' style={{ backgroundImage: 'url(./src/assets/images/bg1.jpg)' }}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-slate-50 shadow-md rounded px-8 py-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                Login
              </button>
              <a className='font-sans text-lg hover:text-red-800 font-bold' href="/register">Register</a>
            </div>
            {error && <div className="text-red-500 mt-4">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
