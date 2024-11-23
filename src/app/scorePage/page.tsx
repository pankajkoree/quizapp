import Image from "next/image";
import logo from "../../../public/file.png";
import score from "../../../public/score.png";
import Footer from "../Footer";

const scorePage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* div for the logo */}
      <div>
        <Image src={logo} alt="logo" className="xl:w-[200px]" />
      </div>
      {/* end div for the logo */}

      {/* div for the score bar */}
      <div>
        <Image src={score} alt="score" className="xl:w-[200px]" />
      </div>
      {/* end div for the score bar */}

      {/* retry button */}
      <div>
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
