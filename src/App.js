import React from "react";
import { Folder, Package, CheckCircle } from "lucide-react"; // Using Lucide icons

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">🚀 My React Template</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This template includes a modern setup with React, Redux, Tailwind CSS, and essential tools
          for best practices.
        </p>

        {/* Folder Structure */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Folder className="text-blue-500" /> Folder Structure:
          </h2>
          <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md text-sm">
            {`src/
├── assets/        # Images, Fonts, Icons
├── components/    # Reusable UI Components
├── hooks/         # Custom Hooks
├── layouts/       # Page Layouts
├── pages/         # Application Pages
├── store/         # Redux Store
├── styles/        # Global Styles
├── utils/         # Helper Functions
├── App.js         # Main Component
├── index.js       # Entry Point
`}
          </pre>
        </div>

        {/* Installed Packages */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Package className="text-green-500" /> Installed Dependencies:
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>React Router (Navigation)</li>
            <li>Redux Toolkit (State Management)</li>
            <li>Tailwind CSS (Styling)</li>
            <li>ESLint + Prettier (Code Quality)</li>
            <li>Axios (API Requests)</li>
            <li>Lucide Icons (Modern Icons)</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
          Developed by{" "}
          <a href="https://nhussein.io" className="text-blue-500">
            nhussein.io
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
