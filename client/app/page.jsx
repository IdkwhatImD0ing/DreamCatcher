"use client";
import dynamic from "next/dynamic";


const LoginButton = dynamic(() => import("./LoginButton"), { ssr: false });
const SignUpButton = dynamic(() => import("./SignUpButton"), {ssr: false});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="mt-6">
        <LoginButton />
      </div>
      <div className="mt-6">
        <SignUpButton />
      </div>
    </div>
    </main>
  );
}
