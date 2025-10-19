"use client";

import React from "react";
import Link from "next/link"; // ✅ this is the correct Link for navigation
import { Phone, Video } from "lucide-react"; // ✅ only import icons from lucide-react

const CreateOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Link
        href="/dashboard/create-interview"
        className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer block hover:shadow-md transition"
      >
        <Video className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold mt-3">Create New Interview</h2>
        <p className="text-gray-500">
          Create AI Interviews and schedule them with candidates
        </p>
      </Link>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <Phone className="p-3 text-primary bg-blue-50 rounded-lg h-12 w-12" />
        <h2 className="font-bold">Create Phone Screening Call</h2>
        <p className="text-gray-500">
          Schedule Phone Screening Call With Candidate
        </p>
      </div>
    </div>
  );
};

export default CreateOptions;
