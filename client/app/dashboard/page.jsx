"use client";
import Link from "next/link";
import DreamContainer from "@/components/DreamContainer";

const Dashboard = () => {
  return (
    <div className="flex md:flex-row flex-col min-h-[calc(100vh-88px)] md:h-[calc(100vh-88px)]">
      <div className="flex flex-col justify-center w-full h-full font-semibold md:px-[2rem] px-[1rem] md:py-0 py-[8rem]">
        <div className="text-[48px]">
          Welcome <span className="text-purple">User</span>
        </div>
        <div className="text-[#AAAAAA]">
          Curious about unraveling the hidden meanings behind your dreams? Look
          no further for a comprehensive understanding and insightful
          interpretations of your subconscious experiences.
        </div>
        <Link
          href="/dashboard/record"
          className="w-[190px] font-bold bg-black hover:bg-purple transition-all px-[16px] py-[16px] rounded-[8px] mt-[2rem] text-[#FFFFFF]"
        >
          Record New Dream
        </Link>
      </div>
      <div className="flex flex-col justify-center w-full h-full font-semibold md:px-[2rem] px-[1rem] md:py-[2rem] py-[8rem]">
        <div className="text-[24px]">Your Recent Dreams</div>
        <DreamContainer />
      </div>
    </div>
  );
};

export default Dashboard;
