// LoginButton.js
"use client";
import { auth } from '../firebase.js'; // Update this path if needed
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LoginButton() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  
  const loginGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const loginEmail = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={loginEmail}>Login with Email</button>
      <button onClick={loginGoogle}>Login with Google</button>
    </div>
  );
}
