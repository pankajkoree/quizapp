"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On initial load, check if dark mode is already enabled
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Apply dark mode class
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark"); // Remove dark mode class
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newDarkMode;
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-gray-900">
      <Boxes />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md focus:outline-none"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default Page;
