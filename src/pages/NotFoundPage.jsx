import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard'); // Adjust the path as per your routing setup
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col justify-center items-center flex-1 bg-gradient-to-r from-pink-500 to-purple-500">
          <h1 className="text-9xl font-extrabold text-white mb-4">404</h1>
          <p className="text-2xl text-white font-semibold mb-6">
            Oops! Looks like you have got lost.
          </p>

          <button
            onClick={goToDashboard}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
