"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";

export default function StreamSettings() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      <h2 className="text-lg font-semibold mb-3">Stream Settings</h2>

      <div>
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Enter stream title..."
          className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-gray-50"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Category</label>
        <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm bg-gray-50">
          <option>Gaming</option>
          <option>Education</option>
          <option>Music</option>
          <option>Technology</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-700 font-medium">
          Enable DVR (Viewers can rewind)
        </label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-700 font-medium">
          Low-latency mode
        </label>
        <Switch />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-700 font-medium">
          Enable Monetization
        </label>
        <Switch />
      </div>
    </div>
  );
}
