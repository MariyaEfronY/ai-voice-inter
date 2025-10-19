"use client";

import React from "react";
import DashboardProvider from "./provider"; // your existing dashboard layout wrapper

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-secondary min-h-screen">
      {/* ✅ DashboardProvider already handles p-10 and welcome section */}
      <DashboardProvider>{children}</DashboardProvider>
    </div>
  );
}
