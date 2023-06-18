import Spaceship from "@/assets/spaceship.jpg";
import Mood from "@/assets/mood.svg";
import Psychologist from "@/assets/psychologist.svg";

import Image from "next/image";

const Dream = () => {
  return (
    <div className="min-h-[calc(100vh-88px)]">
      <div className="min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] flex flex-col items-center py-[4rem] px-[1rem]">
        <div className="text-[48px] font-semibold">Flying Spaceship</div>
        <div className="flex flex-col lg:items-between lg:flex-row h-[70%] w-full justify-center gap-[4rem] mt-[1rem]">
          <div className="w-[400px] h-auto">
            <Image
              src={Spaceship}
              alt="spaceship"
              className="object-cover h-full w-full"
            ></Image>
          </div>
          <div className=" w-[600px] overflow-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos neque temporibus laborum adipisci quae voluptate error
            accusamus esse nobis eaque numquam, ratione, asperiores optio ex
            mollitia sequi voluptas quos alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dignissimos neque temporibus laborum
            adipisci quae voluptate error accusamus esse nobis eaque numquam,
            ratione, asperiores optio ex mollitia sequi voluptas quos alias?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos neque temporibus laborum adipisci quae voluptate error
            accusamus esse nobis eaque numquam, ratione, asperiores optio ex
            mollitia sequi voluptas quos alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dignissimos neque temporibus laborum
            adipisci quae voluptate error accusamus esse nobis eaque numquam,
            ratione, asperiores optio ex mollitia sequi voluptas quos alias?
            mollitia sequi voluptas quos alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dignissimos neque temporibus laborum
            adipisci quae voluptate error accusamus esse nobis eaque numquam,
            ratione, asperiores optio ex mollitia sequi voluptas quos alias?
            mollitia sequi voluptas quos alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dignissimos neque temporibus laborum
            adipisci quae voluptate error accusamus esse nobis eaque numquam,
            ratione, asperiores optio ex mollitia sequi voluptas quos alias?
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-88px)] bg-black text-bgwhite flex flex-col items-center pt-[6rem] pb-[12rem] px-[1rem]">
        <div className="text-[48px] font-semibold">Dream Analysis</div>
        <div className="flex w-full justify-center gap-[6rem] mt-[4rem]">
          <div className="max-w-[500px] flex-1 lg:block hidden">
            <Image
              src={Psychologist}
              alt="psychologist"
              className="object-cover h-full w-full"
            ></Image>
          </div>
          <div className="text-center lg:items-start lg:text-start">
            <div className="text-[24px] font-semibold">
              What is the <span className="text-purple">meaning</span> behind my
              dream?
            </div>
            <div className=" w-[600px] overflow-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos neque temporibus laborum adipisci quae voluptate error
              accusamus esse nobis eaque numquam, ratione, asperiores optio ex
              mollitia sequi voluptas quos alias? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dignissimos neque temporibus
              laborum adipisci quae voluptate error accusamus esse nobis eaque
              numquam, ratione, asperiores optio ex mollitia sequi voluptas quos
              alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos neque temporibus laborum adipisci quae voluptate error
              accusamus esse nobis eaque numquam, ratione, asperiores optio ex m
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-[6rem] mt-[12rem]">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-start">
            <div className="text-[24px] font-semibold">
              What is the <span className="text-purple">mood</span> of my dream?
            </div>
            <div className="w-[600px] text-[64px] font-semibold">HAPPY</div>
          </div>
          <div className="max-w-[500px] flex-1  lg:block hidden">
            <Image
              src={Mood}
              alt="mood"
              className="object-cover h-full w-full"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-[2rem] mt-[12rem]">
          <div className="text-[24px] font-semibold">
            What are some <span className="text-purple">keywords</span> from my
            dream?
          </div>
          <div className="text-[64px] font-semibold text-center">
            spaceship, fly, sky, high
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
