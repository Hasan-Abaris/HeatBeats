"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";

export default function StreamSettings() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-5">
      <h2 className="text-lg font-semibold mb-3">Stream Settings</h2>

      <div>
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Enter stream title..."
          className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-gray-50 focus:ring-2 focus:ring-red-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Category</label>
        <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-gray-50 focus:ring-2 focus:ring-red-500 outline-none">
          <option>Gaming</option>
          <option>Education</option>
          <option>Music</option>
          <option>Technology</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Privacy</label>
        <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-gray-50 focus:ring-2 focus:ring-red-500 outline-none">
          <option>Public</option>
          <option>Unlisted</option>
          <option>Private</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Enable DVR (Allow viewers to rewind)
        </label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Low-latency mode
        </label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Enable monetization
        </label>
        <Switch />
      </div>
    </div>
  );
}
