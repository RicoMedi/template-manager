"use client";

import Header from "@/components/layout/Header";
import UserProfile from "@/components/auth/UserProfile";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProtectedRoute>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Profile
            </h1>
            <UserProfile />
          </div>
        </ProtectedRoute>
      </main>
    </div>
  );
}
