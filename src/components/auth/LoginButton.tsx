"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function LoginButton() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md cursor-not-allowed">
        Loading...
      </button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700">
          Welcome, {user.name || user.email}
        </span>
        <Link
          href="/api/auth/logout"
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/api/auth/login"
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Login
    </Link>
  );
}
