import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
