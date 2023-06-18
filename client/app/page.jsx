"use client";
import dynamic from "next/dynamic";


const LoginButton = dynamic(() => import("./LoginButton"), { ssr: false });
const SignUpButton = dynamic(() => import("./SignUpButton"), {ssr: false});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton />
      <SignUpButton />
    </main>
  );
}
