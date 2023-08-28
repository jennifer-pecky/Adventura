import '../styles/Head.css';
export default function Password() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 home">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
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
            className="py-2 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
          <div className="text-center">
            <p className="text-sm">
              Remember your password?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
