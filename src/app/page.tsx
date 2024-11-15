"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import cartoonBackground from "../../public/file.png";
export default function Home() {
  const router = useRouter();

  const gotoLogin = () => {
    document.cookie = "userType=user; path=/; max-age=3600";
    router.push("/login");
  };

  const gotoSignup = () => {
    document.cookie = "userType=user; path=/; max-age=3600";
    router.push("/signup");
  };

  return (
    <div className="relative min-h-screen dark:bg-gray-900">
      {/* Cartoonish Background */}
      <Image
        src={cartoonBackground}
        alt="Quiz Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Interactive Landing Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 xl:top-4">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white">
          Welcome to QuizMaster!
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl text-gray-600 dark:text-gray-300">
          Ready to challenge your knowledge? Sign in to get started or create an
          account to begin your journey!
        </p>

        {/* Buttons for Login and Signup */}
        <div className="relative flex xl:top-[600px] gap-8 xl:text-2xl">
          <button className="p-[3px] relative hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500  to-purple-500 rounded-md" />
            <div
              className="px-12 py-2 border-2  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
              onClick={gotoSignup}
            >
              Sign up
            </div>
          </button>
          <button className="p-[3px] relative hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md" />
            <div
              className="px-12 py-2 border-2  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
              onClick={gotoLogin}
            >
              Login
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
