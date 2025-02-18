import React, { useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(false); // Initial state is `false` (light mode)

  return (
    <div className={darkMode ? "bg-gray-900 text-white p-4" : "bg-white text-black p-4"}>
      <h2>Theme: {darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button
        className="mt-2 px-4 py-2 rounded bg-blue-500 text-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
