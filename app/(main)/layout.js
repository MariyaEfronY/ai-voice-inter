import React from "react"
import Provider from "@/app/Provider" // ✅ adjust path if needed
import DashboardProvider from "./provider" // your existing dashboard layout wrapper

export default function DashboardLayout({ children }) {
  return (
    <Provider> {/* ✅ wraps everything with context */}
      <DashboardProvider>
        {children}
      </DashboardProvider>
    </Provider>
  )
}
