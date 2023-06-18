"use client";

import Spaceship from "@/assets/spaceship.jpg";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DreamCard = () => {
  const router = useRouter();
  return (
    <div className="md:w-400px flex min-h-[400px] w-[40%] min-w-[240px] flex-col items-center justify-center rounded-[8px] bg-[#ffffff] p-4 shadow-sm">
      <div className="text-center text-[8px]">8-01-2023</div>
      <div className="h-auto w-full">
        <Image
          src={Spaceship}
          alt="spaceship"
          className="h-full w-full bg-cover"
        ></Image>
      </div>
      <div className="mt-[1rem] self-start text-start">Flying Spaceship</div>
      <div className="mt-[0.5rem] self-start text-start text-[#AAAAAA]">
        The spaceship's interior is a sight to behold...
      </div>
      <button
        onClick={() => router.push("/dashboard/dream/1")}
        className="mt-[1rem] h-[40px] w-[184px] rounded-[8px] bg-black font-bold text-[#FFFFFF] transition-all hover:bg-purple"
      >
        Revisit Dream
      </button>
    </div>
  );
};

export default DreamCard;
