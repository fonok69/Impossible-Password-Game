
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-6">Impossible Password Game</h1>
      <input
        type="text"
        placeholder="Enter your password..."
        className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
      />
      <div className="mt-4 text-sm text-gray-600 text-center">
        More chaos coming soon...
      </div>
    </div>
  );
};

export default App;
