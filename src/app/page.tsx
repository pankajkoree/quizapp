"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";
import guest from "../../public/unknown.png";
import user from "../../public/man.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
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

  const gotoStart = () => {
    router.push("/start");
  };

  const gotoLogin = () => {
    router.push("/start");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-gray-900">
      <BackgroundBeamsWithCollision>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md focus:outline-none z-10"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800" />
          )}
        </button>

        {/* Centered guest/user choice */}
        <div className="flex flex-col items-center justify-center h-full gap-12 text-center xl:text-2xl dark:text-white relative z-10">
          <div className="flex gap-12">
            <div className="flex flex-col items-center" onClick={gotoStart}>
              <Image
                src={guest}
                alt="guest"
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[250px] xl:h-[250px]"
              />
              <p>Guest</p>
            </div>
            <div className="flex flex-col items-center" onClick={gotoLogin}>
              <Image
                src={user}
                alt="user"
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[250px] xl:h-[250px]"
              />
              <p>User</p>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
