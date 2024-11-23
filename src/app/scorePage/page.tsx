import Image from "next/image";
import logo from "../../../public/file.png";
import Footer from "../Footer";

const scorePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* div for the logo */}
      <div className="relative flex xl:top-8">
        <Image src={logo} alt="logo" className="xl:w-[200px]" />
      </div>
      {/* end div for the logo */}

      {/* div for the score bar */}
      <div className="relative flex w-full justify-center xl:top-36 text-white">
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
      <div className="relative flex xl:top-40">
        <button className="text-white bg-blue-500 px-4 py-2 rounded mt-4">
          Retry
        </button>
      </div>
      {/* end of retry button */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default scorePage;
