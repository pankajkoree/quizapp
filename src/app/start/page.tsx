import Image from "next/image";
import quizTime from "../../../public/quizTime.png";
import rightArrow from "../../../public/right-arrow.png";
import Footer from "../Footer";

const Start: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex xl:top-24">
        <Image src={quizTime} alt="Quiz Time" />
      </div>
      <div className="relative flex xl:top-28">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 xl:text-2xl">
          Start Now
          <Image src={rightArrow} alt="Right Arrow" className="w-[20px] ml-2" />
        </button>
      </div>
      <div className="relative flex xl:top-[480px]">
        <Footer />
      </div>
    </div>
  );
};

export default Start;
