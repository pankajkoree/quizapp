"use client";

import Image from "next/image";
import logo from "../../../public/file.png";
import rightArrow from "../../../public/right-arrow.png";
import Footer from "../Footer";
import { useRouter } from "next/navigation";

const Start: React.FC = () => {
  const router = useRouter();
  const gotoQuizPage = () => {
    router.push("/quizPage");
  };
  return (
    <div className="relative flex-col w-full">
      <div className="relative flex justify-center xl:top-4">
        <Image src={logo} alt="Logo" className="xl:w-[700px]" />
      </div>

      <div className="relative flex justify-center xl:top-24">
        <button
          className="inline-flex h-16 animate-shimmer items-center justify-center border border-yellow-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50 xl:text-3xl hover:border hover:border-red-500 hover:scale-110 shadow-md shadow-green-400"
          onClick={gotoQuizPage}
        >
          Start Now
          <Image
            src={rightArrow}
            alt="Right Arrow"
            className="w-[24px] ml-2 shadow-md"
          />
        </button>
      </div>

      <div className="relative flex justify-center xl:top-44 xl:text-2xl dark:text-white">
        <h2>
          Highest score : <span>20/25</span>
        </h2>
      </div>
      <div className="relative flex justify-center xl:top-[37%]">
        <Footer />
      </div>
    </div>
  );
};

export default Start;
