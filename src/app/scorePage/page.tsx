import Image from "next/image";
import logo from "../../../public/file.png";
import Footer from "../Footer";
import fb from "../../../public/fb.png";
import ig from "../../../public/ig.png";
import ld from "../../../public/ld.png";

const scorePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* div for the logo */}
      <div className="relative flex xl:top-8">
        <Image src={logo} alt="logo" className="xl:w-[200px]" />
      </div>
      {/* end div for the logo */}

      {/* div for the score bar */}
      <div className="relative flex w-full justify-center xl:top-32 text-white">
        <div className="relative flex xl:h-[110px] xl:w-[44%]">
          <div className="relative flex items-center justify-center xl:h-[110px] xl:w-[70%] bg-green-500 rounded-l-lg xl:text-3xl">
            70%
          </div>
          <div className="relative flex items-center justify-center xl:h-[110px] xl:w-[30%] bg-red-500 rounded-r-lg xl:text-3xl">
            30%
          </div>
        </div>
      </div>
      {/* end div for the score bar */}

      {/* obtained score */}
      <div className="relative flex xl:top-36 text-gray-600 dark:text-white xl:text-3xl">
        22/25
      </div>
      {/* end obtained score */}

      {/* retry button */}
      <div className="relative flex xl:top-56">
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg xl:text-3xl px-8 py-4 text-center mb-2">
          Retry
        </button>
      </div>
      {/* end of retry button */}

      {/* share section */}

      <div className="relative flex flex-col xl:top-[38%] text-gray-800 dark:text-white xl:gap-2">
        <div className="relative flex justify-center">
          <h2 className="xl:text-2xl">Share your score</h2>
        </div>
        <div className="relative flex xl:gap-4">
          <Image src={ld} alt="ld" className="xl:w-[60px]" />
          <Image src={fb} alt="fb" className="xl:w-[60px]" />
          <Image src={ig} alt="ig" className="xl:w-[60px]" />
        </div>
      </div>

      {/* end share section */}

      {/* footer */}
      <div className="relative flex xl:top-[46%]">
        <Footer />
      </div>
      {/* footer */}
    </div>
  );
};

export default scorePage;
