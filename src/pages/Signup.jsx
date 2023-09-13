// import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Head.css';
import { useState } from 'react';
import { postSignup } from '../lib/utilis';
// import { AppContext } from '../App';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postSignup(formData, setSuccessMessage, navigate, setErrorMessage);
  };
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center bg-gray-100 home">
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
          <Link to={'/'}>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          </Link>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                FirstName
              </label>
              <input
                onChange={handleChange}
                value={formData.firstname}
                type="text"
                name="firstname"
                id="firstname"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="John"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                LastName
              </label>
              <input
                onChange={handleChange}
                value={formData.lastname}
                type="text"
                name="lastname"
                id="lastname"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="mark"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                UserName
              </label>
              <input
                onChange={handleChange}
                value={formData.username}
                type="text"
                name="username"
                id="username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="johnmaark223"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                type="text"
                name="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                value={formData.password}
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                placeholder="********"
              />
            </div>
            <button
              name="submit"
              className="w-full bg-[#8B4513] text-white py-2 rounded-md hover:bg-[#000000]"
            >
              Sign Up
            </button>

            <div className="mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-[#3E311E] text-white rounded-md hover:bg-[#000000] focus:outline-none focus:ring focus:ring-red-200">
                Sign Up with Google
              </button>
              <button className="w-full mt-3 py-2 bg-[#3F3120] text-white rounded-md hover:bg-[#000000] focus:outline-none focus:ring focus:ring-gray-300">
                Sign Up with Apple
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="success-message text-green-500">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="error-message text-red-600">{errorMessage}</div>
          )}
        </div>
      </div>
    </>
  );
}
