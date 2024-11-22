import Image from "next/image";
import logo from "../../../public/file.png";

const scorePage = () => {
  return (
    <div>
      <div>
        <Image src={logo} alt="logo" className="xl:w-[200px]" />
      </div>
    </div>
  );
};

export default scorePage;
