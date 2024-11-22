import Image from "next/image";
import logo from "../../../public/file.png";
import score from "../../../public/score.png";
import Footer from "../Footer";

const scorePage = () => {
  return (
    <div className="">
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
        <button className="text-white">Retry</button>
      </div>
      {/* end of retry button */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default scorePage;
