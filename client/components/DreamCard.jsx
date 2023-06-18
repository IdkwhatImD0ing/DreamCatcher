"use client";

import Spaceship from "@/assets/spaceship.jpg";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DreamCard = () => {
  const router = useRouter();
  return (
    <div className="min-w-[240px] w-[40%] md:w-400px p-4 min-h-[400px] bg-[#ffffff] flex flex-col items-center justify-center rounded-[8px] shadow-sm">
      <div className="text-[8px] text-center">8-01-2023</div>
      <div className="w-full h-auto">
        <Image
          src={Spaceship}
          alt="spaceship"
          className="bg-cover h-full w-full"
        ></Image>
      </div>
      <div className="text-start self-start mt-[1rem]">Flying Spaceship</div>
      <div className="text-start self-start mt-[0.5rem] text-[#AAAAAA]">
        The spaceship's interior is a sight to behold...
      </div>
      <button
        onClick={() => router.push("/dashboard/dream/1")}
        className="font-bold bg-black hover:bg-purple transition-all w-[184px] h-[40px] rounded-[8px] mt-[1rem] text-[#FFFFFF]"
      >
        Revisit Dream
      </button>
    </div>
  );
};

export default DreamCard;
