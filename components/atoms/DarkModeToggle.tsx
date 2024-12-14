"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md focus:outline-none flex items-center gap-2"
    >
      {isDarkMode ? (
        <>
          <SunIcon className="h-5 w-5" />
          Light Mode
        </>
      ) : (
        <>
          <MoonStarIcon className="h-5 w-5" />
          Dark Mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
