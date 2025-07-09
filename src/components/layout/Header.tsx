"use client";

import Link from "next/link";
import LoginButton from "@/components/auth/LoginButton";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TM</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Template Manager
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/templates"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Templates
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
}
