// SignUpButton.js
"use client";
import { auth } from "../firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export default function SignUpButton() {
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
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300"
      />
      <button
        onClick={signUpEmail}
        className="w-full px-4 py-2 mt-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
      >
        Sign Up with Email
      </button>
      <button
        onClick={signUpGoogle}
        className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-400"
      >
        Sign Up with Google
      </button>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
