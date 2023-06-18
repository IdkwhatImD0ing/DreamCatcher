import Spaceship from "@/assets/spaceship.jpg";
import Mood from "@/assets/mood.svg";
import Psychologist from "@/assets/psychologist.svg";

import Image from "next/image";

const Dream = () => {
  return (
    <div className="min-h-[calc(100vh-88px)]">
      <div className="flex min-h-[calc(100vh-88px)] flex-col items-center px-[1rem] py-[4rem] lg:h-[calc(100vh-88px)]">
        <div className="text-[48px] font-semibold">Flying Spaceship</div>
        <div className="lg:items-between mt-[1rem] flex h-[70%] w-full flex-col justify-center gap-[4rem] lg:flex-row">
          <div className="h-auto w-[400px]">
            <Image
              src={Spaceship}
              alt="spaceship"
              className="h-full w-full object-cover"
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
      <div className="flex min-h-[calc(100vh-88px)] flex-col items-center bg-black px-[1rem] pb-[12rem] pt-[6rem] text-bgwhite">
        <div className="text-[48px] font-semibold">Dream Analysis</div>
        <div className="mt-[4rem] flex w-full justify-center gap-[6rem]">
          <div className="hidden max-w-[500px] flex-1 lg:block">
            <Image
              src={Psychologist}
              alt="psychologist"
              className="h-full w-full object-cover"
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
        <div className="mt-[12rem] flex w-full justify-center gap-[6rem]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
            <div className="text-[24px] font-semibold">
              What is the <span className="text-purple">mood</span> of my dream?
            </div>
            <div className="w-[600px] text-[64px] font-semibold">HAPPY</div>
          </div>
          <div className="hidden max-w-[500px]  flex-1 lg:block">
            <Image
              src={Mood}
              alt="mood"
              className="h-full w-full object-cover"
            ></Image>
          </div>
        </div>
        <div className="mt-[12rem] flex w-full flex-col items-center justify-center gap-[2rem]">
          <div className="text-[24px] font-semibold">
            What are some <span className="text-purple">keywords</span> from my
            dream?
          </div>
          <div className="text-center text-[64px] font-semibold">
            spaceship, fly, sky, high
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
