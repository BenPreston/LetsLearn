import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-black bg-center bg-cover"
      //   style={{ backgroundImage: "url('/lets-learn.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

      <h1 className="z-10 text-white text-title font-display">Lets Learn!</h1>
      <h2 className="z-10 my-4 text-gray-300 text-subtitle font-body">
        Learn as and when you want
      </h2>

      <div className="z-10 flex flex-col space-y-4">
        <Link href="/sign-up">
          <Button className="px-6 py-2 text-white rounded-lg shadow-lg bg-primary">
            SignUp
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button className="px-6 py-2 text-white rounded-lg shadow-lg bg-secondary">
            Sign In
          </Button>
        </Link>
      </div>

      <a href="/home-page" className="z-10 mt-6 text-white underline">
        Continue as a guest
      </a>
    </div>
  );
}
