import Diary from "@/assets/diary.svg";

import Image from "next/image";
import Link from "next/link";

import RecordForm from "@/components/RecordForm";

const Record = () => {
  return (
    <div className="h-full">
      <div className="left-0 top-0 z-[-1] h-full flex-col bg-bgwhite px-[2rem] py-[2rem] md:flex md:w-[50%] md:px-[4rem] md:py-0">
        <div className="flex h-full w-full flex-col justify-between">
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
      <div className="fixed right-0 top-0 z-[-1] hidden h-screen w-[50%] justify-center bg-purple px-[3rem] md:flex">
        <Image src={Diary} alt="diary" className="" />
      </div>
    </div>
  );
};

export default Record;
