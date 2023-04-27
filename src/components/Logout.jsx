
import React from "react";

const Logout = ({ onLogout }) => {
  return (
    <div className="flex items-center justify-end">
      <button
        className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
