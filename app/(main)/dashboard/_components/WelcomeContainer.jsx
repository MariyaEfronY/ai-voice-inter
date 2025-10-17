"use client"
import React from "react"
import { useUser } from "@/app/Provider"

export default function WelcomeContainer() {
  const { user } = useUser()

  return (
     <div>
      <div className="bg-white p-5 rounded-2xl ">
      <h1 className="text-lg font-bold">Welcome Back, {user?.name || "Guest"} </h1>
      <p className="text-gray-500">Email: {user?.email || "Not available"}</p>
      <h2>AI-Driven Interview</h2>
      </div>
    </div>
  )
}
