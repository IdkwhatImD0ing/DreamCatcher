import Diary from "@/assets/diary.svg";

import Image from "next/image";
import Link from "next/link";

import RecordForm from "@/components/RecordForm";

const Record = () => {
  return (
    <div className="h-full">
      <div className="md:flex flex-col top-0 left-0 z-[-1] md:w-[50%] h-full bg-bgwhite md:px-[4rem] px-[2rem] md:py-[2rem] py-[4rem]">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="text-[24px] font-bold md:mt-[2rem]">
            <div>
              Record New <span className="text-purple">Dream</span>
            </div>
            <div className="mt-[2rem]">
              <RecordForm />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center fixed hidden top-0 right-0 z-[-1] w-[50%] h-screen bg-purple px-[3rem]">
        <Image src={Diary} alt="diary" className="" />
      </div>
    </div>
  );
};

export default Record;
