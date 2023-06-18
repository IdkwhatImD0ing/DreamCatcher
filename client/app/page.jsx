import dynamic from "next/dynamic";

const LoginButton = dynamic(() => import("@/components/LoginForm"), {
  ssr: false,
});
const SignUpButton = dynamic(() => import("@/components/SignUpForm"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
