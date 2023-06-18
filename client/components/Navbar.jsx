"use client";

import DreamCatcher from "@/assets/dream-catcher-logo.svg";
import Profile from "@/assets/profile.svg";
import ProfileWhite from "@/assets/profile-white.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <nav className="h-[88px] flex justify-between font-semibold px-[42px]">
      <Link href="/dashboard" className="flex items-center gap-4">
        <Image src={DreamCatcher} alt="dream-catcher" />
        <div>DreamCatch</div>
      </Link>
      <div
        className={`flex items-center gap-[1rem] ${
          pathname === "/dashboard/record" ? "text-bgwhite" : "text-black"
        }`}
      >
        <Link
          href="/dashboard"
          className="transition-all hover:bg-[rgba(0,0,0,0.05)] px-[1rem] py-[0.5rem] rounded-[8px]"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="transition-all hover:bg-[rgba(0,0,0,0.05)] px-[1rem] py-[0.5rem] rounded-[8px]"
        >
          About Us
        </Link>
        <div className="transition-all hover:bg-[rgba(0,0,0,0.05)] cursor-pointer p-[0.5rem] rounded-[8px]">
          {pathname === "/dashboard/record" ? (
            <Image src={ProfileWhite} alt="profile-white" />
          ) : (
            <Image src={Profile} alt="profile" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
