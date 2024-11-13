import Image from "next/image";
import logo from "../../../public/logo-2.png";
import rightArrow from "../../../public/right-arrow.png";
import Footer from "../Footer";

const Start: React.FC = () => {
  return (
    <div className="relative flex flex-col">
      <div className="relative flex xl:-top-28">
        <Image src={logo} alt="Logo" className="xl:w-[500px]" />
      </div>
      <div className="relative flex justify-center xl:-top-16">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-yellow-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50 xl:text-2xl">
          Start Now
          <Image
            src={rightArrow}
            alt="Right Arrow"
            className="w-[24px] ml-2 shadow-md"
          />
        </button>
      </div>
      <div className="relative flex top-40 justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Start;
