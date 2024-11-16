"use client";

import Image from "next/image";
import logo from "../../../public/file.png";
import nextPage from "../../../public/next.png";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const QuizPage = () => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // main div
    <div className="dark:text-white relative flex flex-col w-full">
      {/* logo and question number */}
      <div className="relative xl:w-[70%] xl:h-[120px] xl:left-[15%] flex top-4">
        <div className="xl:w-[50%] relative flex items-center">
          <Image src={logo} alt="logo" className="xl:w-[300px] xl:h-[100px]" />
        </div>
        <div className="xl:w-[50%] relative flex justify-end items-center">
          <h1 className="xl:text-3xl relative flex bg-orange-600 p-4 rounded-lg">
            01/25
          </h1>
        </div>
      </div>
      {/* end of logo and question div */}

      {/* question div */}
      <div className="relative flex items-center xl:w-[70%] xl:left-[15%] xl:h-[120px] rounded-lg xl:top-4 bg-gray-800 dark:bg-white">
        <h1 className="relative p-8 xl:text-3xl text-white dark:text-gray-800">
          Inside which HTML element do we put the JavaScript?
        </h1>
      </div>
      {/* end of question div */}
      {/* timer div */}
      <div className="relative flex xl:w-[70%] xl:left-[15%] xl:top-8">
        <div className="xl:w-full relative flex justify-end items-center">
          <h1 className="xl:text-2xl relative flex bg-green-400 p-3 rounded-lg">
            00: <span>{timer}</span>
          </h1>
        </div>
      </div>
      {/* end of timer div */}

      {/* options div */}
      <div className="relative flex flex-col gap-6 xl:w-[70%] xl:left-[15%] xl:h-[45%] bg-gray-800 rounded-lg dark:bg-white xl:top-12">
        <div className="relative bg-white dark:bg-gray-800 xl:w-[96%] xl:left-[2%] xl:h-[80px] xl:top-4 rounded-lg">
          <h1 className="relative xl:text-3xl flex items-center h-full p-4">
            js
          </h1>
        </div>
        <div className="relative bg-white dark:bg-gray-800 xl:w-[96%] xl:left-[2%] xl:h-[80px] xl:top-4 rounded-lg">
          <h1 className="relative xl:text-3xl flex items-center h-full p-4">
            scripting
          </h1>
        </div>
        <div className="relative bg-white dark:bg-gray-800 xl:w-[96%] xl:left-[2%] xl:h-[80px] xl:top-4 rounded-lg">
          <h1 className="relative xl:text-3xl flex items-center h-full p-4">
            JavaScript
          </h1>
        </div>
        <div className="relative bg-white dark:bg-gray-800 xl:w-[96%] xl:left-[2%] xl:h-[80px] xl:top-4 rounded-lg">
          <h1 className="relative xl:text-3xl flex items-center h-full p-4">
            script
          </h1>
        </div>
      </div>
      {/* end options div */}

      {/* next question Div */}
      <div className="relative flex top-16 justify-center">
        <Image
          src={nextPage}
          alt="nextPage"
          className="xl:w-[100px] hover:cursor-pointer"
        />
      </div>
      {/* end of next question Div */}

      {/* footer */}
      <div className="relative flex justify-center xl:top-[14%]">
        <Footer />
      </div>
      {/* end of footer */}
    </div>
  );
};

export default QuizPage;
