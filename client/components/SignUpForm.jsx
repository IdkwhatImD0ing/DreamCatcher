"use client";

import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function SignUpButton() {
  const [user] = useAuthState(auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

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
      <div className="flex h-full max-w-[24rem] flex-col">
        <div className="flex w-full gap-[1rem]">
          <div className="">
            <label>First Name</label>
            <input
              required
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-[0.5rem] h-[36px] w-full rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
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
              className="mt-[0.5rem] h-[36px] w-full rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
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
          className="mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />
        <label className="mt-[1rem]">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />

        <button
          onClick={signUpEmail}
          className="mt-[2rem] h-[56px] w-[176px] rounded-[8px] bg-black font-bold text-[#FFFFFF] transition-all hover:bg-purple"
        >
          Sign Up
        </button>

        <div className="mt-[1rem] flex items-center">
          <div className="h-0 w-[8rem] border-[0.5px] border-[#BBBBBB]"></div>
          <div className="w-[4rem] text-center text-[#BBBBBB]">or</div>
          <div className="h-0 w-[8rem] border-[0.5px] border-[#BBBBBB]"></div>
        </div>

        <button
          onClick={signUpGoogle}
          className="mt-[1rem] h-[56px] w-[176px] rounded-[8px] bg-black font-bold text-[#FFFFFF] transition-all hover:bg-purple"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}
