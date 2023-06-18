"use client";

import { auth } from "../firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";

export default function SignUpButton() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  const signUpGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const signUpEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col text-[16px] font-normal">
      <div className="flex flex-col h-full max-w-[24rem]">
        <div className="flex gap-[1rem] w-full">
          <div className="">
            <label>First Name</label>
            <input
              required
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px] w-full"
            />
          </div>
          <div className="">
            <label>Last Name</label>
            <input
              required
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px] w-full"
            />
          </div>
        </div>

        <label className="mt-[1rem]">Email</label>
        <input
          required
          type="text"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px]"
        />
        <label className="mt-[1rem]">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px]"
        />

        <button
          onClick={signUpEmail}
          className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[2rem] text-[#FFFFFF]"
        >
          Sign Up
        </button>

        <div className="mt-[1rem] flex items-center">
          <div className="border-[0.5px] border-[#BBBBBB] w-[8rem] h-0"></div>
          <div className="w-[4rem] text-[#BBBBBB] text-center">or</div>
          <div className="border-[0.5px] border-[#BBBBBB] w-[8rem] h-0"></div>
        </div>

        <button
          onClick={signUpGoogle}
          className="mt-[1rem] font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] text-[#FFFFFF]"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}
