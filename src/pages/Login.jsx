import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postLogin } from '../lib/utilis';

export default function Login() {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    postLogin(toast, navigate, setIsLoggedIn, input, setInput, setIsLoading);
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 home">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="py-2 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="py-2 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 bg-[#8B4513] text-white rounded-md w-full hover:bg-[#000000]"
            >
              Log In
            </button>
            <div className="mt-4 text-sm text-gray-600">
              <Link to={'/password'} className="text-blue-500 hover:underline">
                Forgotten Password?
              </Link>
            </div>
            <div className="text-center">
              <p className="text-sm">Or continue with</p>
              <div className="flex justify-center space-x-2 mt-2">
                <button className="py-2 px-4 bg-[#8B4513] text-white rounded-md w-1/2 hover:bg-[#000000]">
                  Google
                </button>
                <button className="py-2 px-4 bg-black text-white rounded-md w-1/2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  Apple
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Don`t have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>

        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}
