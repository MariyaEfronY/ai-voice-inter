"use client"
import React from "react"
import { useUser } from "@/app/Provider"

export default function WelcomeContainer() {
  const { user } = useUser()

  return (
     <div className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.name || "Guest"}
      </h1>
      <p className="text-gray-600">
        Email: {user?.email || "Not available"}
      </p>
    </div>
  )
}
