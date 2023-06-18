"use client";

import { useState } from "react";
import Image from "next/image";

import Audio from "@/assets/audio.svg";

export default function RecordForm() {
  let lorem =
    "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputVal, setInputVal] = useState(lorem);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col pb-[2rem] text-[16px] font-normal md:pb-0">
      <div className="flex h-full max-w-[18rem] flex-col">
        <label>Dream Title</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus-purple mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />
        <label className="mt-[2rem]">Date of Dream</label>
        <input
          type="date"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />
        <div className="mt-[2rem] flex items-center gap-[1rem]">
          <button
            onClick={() => setRecording(!recording)}
            className="h-[48px] w-[64px] rounded-[8px] border border-black bg-bgwhite px-[1rem] font-bold text-[#FFFFFF] transition-all hover:bg-purple"
          >
            <Image src={Audio} alt="audio" className="" />
          </button>
          {recording && <div className="text-purple">Recording...</div>}
        </div>

        <div className="">
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="mt-[1rem] h-[200px] w-[400px] resize-none overflow-y-auto border border-[#BBBBBB] bg-bgwhite px-2 py-1"
          ></textarea>
        </div>
        <button className="mt-[2rem] h-[56px] w-[176px] rounded-[8px] bg-black font-bold text-[#FFFFFF] transition-all hover:bg-purple">
          Analyze Dream
        </button>
      </div>
    </div>
  );
}
