"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import logo from "../../../public/file.png";
import nextPage from "../../../public/next.png";
import Footer from "../Footer";

const getMCQDataByPage = async (page: number = 0): Promise<any> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/mcq/getMCQ?page=${page}&limit=1`
    );

    if (!response.ok) {
      toast.error("Failed to fetch...");
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("An unknown error occurred.");
    }
    return false;
  }
};

const QuizPage = () => {
  const [timer, setTimer] = useState(30);
  const [page, setPage] = useState(0);
  const [data, setData] = useState<any>(null);

  const transferPage = (): void => {
    setPage((prevPage) => prevPage + 1);
    setTimer(30);
  };

  // Fetch data when `page` changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMCQDataByPage(page);
      if (response) {
        setData(response);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          transferPage();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [page]);
  let mcq = [];

  if (data) {
    mcq = data.results[0];
  }

  return (
    <div className="dark:text-white relative flex flex-col w-full">
      {/* Logo and question number */}
      <div className="relative xl:w-[70%] xl:h-[120px] xl:left-[15%] flex top-4">
        <div className="xl:w-[50%] relative flex items-center">
          <Image src={logo} alt="logo" className="xl:w-[300px] xl:h-[100px]" />
        </div>
        <div className="xl:w-[50%] relative flex justify-end items-center">
          <h1 className="xl:text-3xl relative flex bg-orange-600 p-4 rounded-lg">
            {page + 1}/25
          </h1>
        </div>
      </div>

      {/* Question div */}
      <div className="relative flex items-center xl:w-[70%] xl:left-[15%] xl:h-[120px] rounded-lg xl:top-4 bg-gray-800 dark:bg-white">
        <h1 className="relative p-8 xl:text-3xl text-white dark:text-gray-800">
          {mcq?.Questions}
        </h1>
      </div>

      {/* Timer div */}
      <div className="relative flex xl:w-[70%] xl:left-[15%] xl:top-8">
        <div className="xl:w-full relative flex justify-end items-center">
          <h1 className="xl:text-2xl relative flex bg-green-400 p-3 rounded-lg">
            00: <span>{timer}</span>
          </h1>
        </div>
      </div>

      {/* Options div */}
      {mcq.length !== 0 ? (
        <div className="relative flex flex-col gap-6 xl:w-[70%] xl:left-[15%] xl:h-[45%] bg-gray-800 rounded-lg dark:bg-white xl:top-12">
          {mcq.options.map((option: string, index: number) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 xl:w-[96%] xl:left-[2%] xl:h-[80px] xl:top-4 rounded-lg"
            >
              <h1 className="relative xl:text-3xl flex items-center h-full p-4">
                {option}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        "Loading..."
      )}

      {/* Next question Div */}
      <div className="relative flex top-16 justify-center">
        <Image
          src={nextPage}
          alt="nextPage"
          className="xl:w-[100px] hover:cursor-pointer"
          onClick={transferPage}
        />
      </div>

      {/* Footer */}
      <div className="relative flex justify-center xl:top-[14%]">
        <Footer />
      </div>
    </div>
  );
};

export default QuizPage;
