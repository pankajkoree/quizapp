"use client";

import Image from "next/image";
import guest from "../../public/unknown.png";
import user from "../../public/man.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const gotoStart = () => {
    router.push("/start");
  };

  const gotoLogin = () => {
    router.push("/login");
  };

  return (
    <div className=" bg-white dark:bg-gray-900">
      {/* Centered guest/user choice */}
      <div className="flex flex-col items-center justify-center h-full gap-12 text-center xl:text-2xl dark:text-white relative z-10">
        <div className="flex gap-12">
          <div className="flex flex-col items-center" onClick={gotoStart}>
            <Image
              src={guest}
              alt="guest"
              className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[250px] xl:h-[250px]"
            />
            <p>Guest</p>
          </div>
          <div className="flex flex-col items-center" onClick={gotoLogin}>
            <Image
              src={user}
              alt="user"
              className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] xl:w-[250px] xl:h-[250px]"
            />
            <p>User</p>
          </div>
        </div>
      </div>
    </div>
  );
}
