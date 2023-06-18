// SignUpButton.js
"use client";
import { auth } from "../firebase.js"; // Update this path if needed
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export default function SignUpButton() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const signUpGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
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
      <button onClick={signUpEmail}>Sign Up with Email</button>
      <button onClick={signUpGoogle}>Sign Up with Google</button>
    </div>
  );
}
