// import { NavLink } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Head.css';
import { useState } from 'react';

export default function Signup() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://api-for-adventura-app.onrender.com/api/v1/auth/signUp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Redirect or show a success message
      } else {
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100 home">
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
                type="firstname"
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
                type="lastname"
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
                type="username"
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
                type="email"
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
            <button className="w-full bg-[#8B4513] text-white py-2 rounded-md hover:bg-[#000000]">
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
        </div>
      </div>
    </>
  );
}
