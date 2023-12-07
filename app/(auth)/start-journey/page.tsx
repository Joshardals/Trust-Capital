"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      console.log(email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      router.push("/dashboard");
    } catch (error: any) {
      console.log(`Signup Error: ${error.message}`);
    }
  };
  return (
    <div className="bg-babyblue h-screen">
      <div className="flex flex-col bg-goldenrod justify-center p-5 items-center space-y-10">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup} className="p-4 bg-puregreen">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default page;
