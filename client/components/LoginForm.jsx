"use client";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState, useEffect } from "react";

export default function LoginButton() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const loginEmail = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col text-[16px] font-normal">
      <div className="flex flex-col h-full max-w-[18rem]">
        <label>Email</label>
        <input
          required
          type="text"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px] focus-purple"
        />
        <label className="mt-[2rem]">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px]"
        />
        <button
          onClick={loginEmail}
          className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[4rem] text-[#FFFFFF]"
        >
          Log In
        </button>

        <div className="mt-[2rem] flex items-center">
          <div className="border-[0.5px] border-[#BBBBBB] w-[8rem] h-0"></div>
          <div className="w-[4rem] text-[#BBBBBB] text-center">or</div>
          <div className="border-[0.5px] border-[#BBBBBB] w-[8rem] h-0"></div>
        </div>

        <button
          onClick={loginGoogle}
          className="mt-[2rem] font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] text-[#FFFFFF]"
        >
          Log In with Google
        </button>
      </div>
    </div>
  );
}
