"use client";

import { useState } from "react";
import Image from "next/image";

import Audio from "@/assets/audio.svg";

export default function RecordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col text-[16px] font-normal pb-[2rem] md:pb-0">
      <div className="flex flex-col h-full max-w-[18rem]">
        <label>Dream Title</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px] focus-purple"
        />
        <label className="mt-[2rem]">Date of Dream</label>
        <input
          type="date"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px]"
        />
        <button className="font-bold px-[1rem] bg-bgwhite hover:bg-purple transition-all w-[190px] h-[48px] rounded-[8px] mt-[2rem] border border-black text-[#FFFFFF]">
          <Image src={Audio} alt="audio" className="mr-[1rem]" />
        </button>
        <div className="w-[400px] max-h-[200px] overflow-y-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          pulvinar pellentesque. Cras semper tempus arcu ut lobortis. Praesent a
          quam lobortis, tincidunt massa id, aliquet lectus. Sed aliquet rutrum
          euismod. Morbi ligula massa, luctus eu tempor sit amet, lacinia vel
          diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          cursus pulvinar pellentesque. Cras semper tempus arcu ut lobortis.
          Praesent a quam lobortis, tincidunt massa id, aliquet lectus. Sed
          aliquet rutrum euismod. Morbi ligula massa, luctus eu tempor sit amet,
          lacinia vel diam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed cursus pulvinar pellentesque. Cras semper tempus arcu ut
          lobortis. Praesent a quam lobortis, tincidunt massa id, aliquet
          lectus. Sed aliquet rutrum euismod. Morbi ligula massa, luctus eu
          tempor sit amet, lacinia vel diam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed cursus pulvinar pellentesque. Cras
          semper tempus arcu ut lobortis. Praesent a quam lobortis, tincidunt
          massa id, aliquet lectus. Sed aliquet rutrum euismod. Morbi ligula
          massa, luctus eu tempor sit amet, lacinia vel diam.
        </div>
        <button className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[2rem] text-[#FFFFFF]">
          Analyze Dream
        </button>
      </div>
    </div>
  );
}
