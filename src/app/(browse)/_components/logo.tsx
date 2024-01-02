import Image from "next/image";
import {Poppins} from "next/font/google";

import {cn} from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex  items-center gap-x-4 hover:opacity-75 transition ">
        <div className="bg-white rounded-full p-1.5 ">
          <Image
            src="/twitch.svg"
            alt="Twitch Clone"
            height={32}
            width={32}
          ></Image>
        </div>
        <div>
          <p className="hidden lg:flex text-lg font-semibold">Twitch Clone</p>
        </div>
      </div>
    </Link>
  );
};
