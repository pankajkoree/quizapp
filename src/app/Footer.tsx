import Link from "next/link";
import React from "react";

const Footer: React.FC = () => (
  <div className="relative flex justify-center text-xl mb-4">
    <h1>
      Made with ❤️ By{" "}
      <Link href="https://github.com/pankajkoree" target="_blank">
        Pankaj
      </Link>
    </h1>
  </div>
);

export default Footer;
