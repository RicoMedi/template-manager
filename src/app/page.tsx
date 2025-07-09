"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function Home() {
  const { user, isLoading } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Template Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create, manage, and track your projects with customizable templates
          </p>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : user ? (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Link
                    href="/projects"
                    className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/templates"
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Manage Templates
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Get Started
                </h2>
                <p className="text-gray-600 mb-4">
                  Sign in to start managing your projects and templates.
                </p>
                <Link
                  href="/api/auth/login"
                  className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
