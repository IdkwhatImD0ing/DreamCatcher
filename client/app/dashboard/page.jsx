import Link from "next/link";

import DreamCard from "@/components/DreamCard";
import CheckLoggedIn from "@/components/CheckLoggedIn";

const Dashboard = () => {
  <CheckLoggedIn />;
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
        <Link href="/dashboard/record">
          <button className="font-bold bg-black hover:bg-purple transition-all w-[190px] h-[56px] rounded-[8px] mt-[2rem] text-[#FFFFFF]">
            Record New Dream
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center w-full h-full font-semibold md:px-[2rem] px-[1rem] md:py-[2rem] py-[8rem]">
        <div className="text-[24px]">Your Recent Dreams</div>
        <div className="flex flex-wrap md:gap-[4rem] mx-auto w-full max-w-[960px] overflow-auto gap-[0.5rem] mt-[1rem]">
          <DreamCard />
          <DreamCard />
          <DreamCard />
          <DreamCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
