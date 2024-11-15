"use client";

import Image from "next/image";
import logo from "../../../public/file.png";

const QuizPage = () => {
  return (
    // main div
    <div className="dark:text-white relative flex">
      {/* logo and question number */}
      <div className="relative bg-gray-800 w-full">
        <div>
          <Image src={logo} alt="logo" className="xl:w-[300px] xl:h-[180px]" />
        </div>
        <div>01/25</div>
      </div>
      {/* end of logo and question div */}
    </div>
  );
};

export default QuizPage;
