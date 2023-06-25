"use client";
import { redirect } from "next/navigation";

import { auth } from "@/firebase";

const CheckLoggedIn = () => {
  if (!auth.currentUser) {
    redirect("/login");
  }
  return <></>;
};

export default CheckLoggedIn;
