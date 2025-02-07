"use client";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Login() {
  const route = useRouter();

  const onSubmits = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      let res = await axios.post(`${baseUrl}/auth`, {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
        route.push("/dashboard");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (localStorage.getItem("accessToken")) {
    route.push("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={onSubmits}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg w-full transition duration-300"
        >
          Submit
        </button>
        <p className="mt-4 text-gray-600">
          Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Login  Now</Link>
        </p>
        <Link href="/register">
          <h1 className="mt-2 text-blue-500 hover:underline text-lg">Sign up</h1>
        </Link>
      </form>
    </div>
  );
}

export default Login;
