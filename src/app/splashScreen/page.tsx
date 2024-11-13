"use client";

import Image from "next/image";
import guest from "../../../public/unknown.png";
import user from "../../../public/man.png";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="relative flex xl:gap-8 text-center text-16px md:text-xl lg:text-xl xl:text-2xl">
        <div>
          <Image
            src={guest}
            alt="guest"
            className="xl:w-[200px] xl:h-[200px]"
          />
          <p>Guest</p>
        </div>
        <div>
          <Image src={user} alt="user" className="xl:w-[200px] xl:h-[200px]" />
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
