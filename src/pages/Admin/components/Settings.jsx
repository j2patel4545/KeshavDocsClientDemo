import React from "react";

export default function Settings({ darkMode, setDarkMode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Dark Mode
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner dark:bg-gray-600 relative">
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                  darkMode ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
