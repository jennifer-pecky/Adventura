import { Link } from 'react-router-dom';
import '../styles/Head.css';
import { useState } from 'react';
export default function Password() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    try {
      const response = await fetch(
        'https://api-for-adventura-app.onrender.com/api/v1/users/resetpassword/{token}',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage('Reset link sent successfully. Check your email.');
      } else {
        setMessage('Failed to send Rest link, Please try again');
      }
    } catch (error) {
      console.error('Error:'.error);
      setMessage('An error occurred, please try again later!');
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 home">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <div className="space-y-4">
          <p className="text-xs text-gray-400">
            Enter your email address to reset your password. We will send you a
            reset link.
          </p>
          <label htmlFor="email" className="block text-sm">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-4 block w-full border rounded-md text-sm focus:border-[#8B4513]"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-[#8B4513] text-white rounded-md w-full hover:bg-black"
            onClick={handleReset}
          >
            Send Reset Link
          </button>
          {message && <p className="text-sm text-green-500">{message}</p>}
          <div className="text-center">
            <p className="text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
