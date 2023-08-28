export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 home">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <div className="space-y-4">
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
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="py-2 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
          <div className="text-center">
            <p className="text-sm">Or continue with</p>
            <div className="flex justify-center space-x-2 mt-2">
              <button className="py-2 px-4 bg-red-500 text-white rounded-md w-1/2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                Google
              </button>
              <button className="py-2 px-4 bg-gray-900 text-white rounded-md w-1/2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900">
                Apple
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Don`t have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
