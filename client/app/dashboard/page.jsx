"use client";
import Link from "next/link";
import DreamContainer from "@/components/DreamContainer";

const Dashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-88px)] flex-col md:h-[calc(100vh-88px)] md:flex-row">
      <div className="flex h-full w-full flex-col justify-center px-[1rem] py-[8rem] font-semibold md:px-[2rem] md:py-0">
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
          className="mt-[2rem] w-[190px] rounded-[8px] bg-black px-[16px] py-[16px] font-bold text-[#FFFFFF] transition-all hover:bg-purple"
        >
          Record New Dream
        </Link>
      </div>
      <div className="flex h-full w-full flex-col justify-center px-[1rem] py-[8rem] font-semibold md:px-[2rem] md:py-[2rem]">
        <div className="text-[24px]">Your Recent Dreams</div>
        <DreamContainer />
      </div>
    </div>
  );
};

export default Dashboard;
