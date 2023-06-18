"use client";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase";

const CheckLoggedIn = () => {
  const router = useRouter();
  if (auth.currentUser === null) {
    router.push("/login");
  }
  return <></>;
};

export default CheckLoggedIn;
