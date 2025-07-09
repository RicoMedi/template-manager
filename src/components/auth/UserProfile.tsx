"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";

export default function UserProfile() {
  const { user, isLoading } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-6">
        {user.picture && (
          <img
            src={user.picture}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {user.name || "User"}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <p className="text-gray-900">{user.email}</p>
        </div>

        {user.email_verified !== undefined && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Verified
            </label>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                user.email_verified
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {user.email_verified ? "Verified" : "Not Verified"}
            </span>
          </div>
        )}

        {user.sub && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <p className="text-sm text-gray-500 font-mono">{user.sub}</p>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
}
