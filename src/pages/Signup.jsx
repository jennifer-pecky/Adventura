// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Head.css';

export default function Signup() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100 home">
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
          <Link to={'/'}>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          </Link>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
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
              type="password"
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
        </div>
      </div>
    </>
  );
}
