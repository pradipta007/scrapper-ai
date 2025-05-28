"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Welcome to Scrapper AI</h1>
      <div className="space-x-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
