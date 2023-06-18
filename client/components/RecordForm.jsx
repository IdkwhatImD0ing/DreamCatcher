"use client";

import { useState } from "react";

export default function RecordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col text-[16px] font-normal">
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
        <button className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[4rem] text-[#FFFFFF]">
          Analyze Dream
        </button>
      </div>
    </div>
  );
}
