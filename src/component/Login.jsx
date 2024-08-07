import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mycontext } from './SignUp';



const Login = ({ setIsLoggedIn }) => {
  const [loginError, setLoginError] = useState({});
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const navigate = useNavigate();
  const { adminData } = useContext(Mycontext);
  const { adminName, adminEmail } = adminData;

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handlePass = (e) => {
    setUserPass(e.target.value);
  };

  const handleClick = async () => {
    const errors = {};
    try {
      const response = await fetch('https://6b6lwvt1-3000.inc1.devtunnels.ms/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const users = await response.json();

      const user = users.find((user) => user.name === userName && user.password === userPass);

      if (userName === adminName && userPass === adminEmail) {
        localStorage.setItem('currentUser', JSON.stringify({ name: adminName, email: adminEmail }));
        localStorage.setItem('isLogin', JSON.stringify(true));
        setIsLoggedIn(true);
        navigate('/admin');
      } else if (!user) {
        if (!users.find((user) => user.name === userName)) {
          errors.nameErr = '* Name does not match';
        }
        if (!users.find((user) => user.password === userPass)) {
          errors.passErr = '* Password does not match';
        }
        setLoginError(errors);
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLogin', JSON.stringify(true));
        setIsLoggedIn(true);
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoginError({ nameErr: '* Error fetching user data' });
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-md mx-auto my-10 bg-white p-8 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              onChange={handleName}
              type="text"
              id="name"
              className="mt-1 block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
            {loginError.nameErr && <p className="text-red-700">{loginError.nameErr}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={handlePass}
              type="password"
              id="password"
              className="mt-1 block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {loginError.passErr && <p className="text-red-700">{loginError.passErr}</p>}
          </div>
        </div>
        <button onClick={handleClick} class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login</span>
            </button>
        <div className='mt-5 underline hover:text-btnColor'>
          <Link to={'/signup'}>Not have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
