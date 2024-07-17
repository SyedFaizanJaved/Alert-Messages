import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Make sure Tailwind CSS is imported

function App() {
  const notifySuccess = () => {
    toast.success('This is a success message!', {
      position: "top-right",
      autoClose: 2500, // 3.5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'bg-green-500 text-white', // Tailwind CSS classes
    });
  };

  const notifyWarning = () => {
    toast.warn('This is a warning message!', {
      position: "top-right",
      autoClose: 2500, // 3.5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'bg-yellow-500 text-black', // Tailwind CSS classes
    });
  };

  const notifyError = () => {
    toast.error('This is an error message!', {
      position: "top-right",
      autoClose: 2500, // 3.5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'bg-red-500 text-white', // Tailwind CSS classes
    });
  };

  return (
    <div className="App flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React Toast Notifications</h1>
      <button
        onClick={notifySuccess}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
      >
        Show Success Toast
      </button>
      <button
        onClick={notifyWarning}
        className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition duration-300"
      >
        Show Warning Toast
      </button>
      <button
        onClick={notifyError}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Show Error Toast
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
