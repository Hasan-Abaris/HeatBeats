"use client";
import Image from "next/image";
import React from "react";

export default function DetailsPage() {
  const videoData = {
    title:
      'Elvish Yadav Controversy! 😳 | Why The Internet is Divided?" | Documentary | Internet Personalities',
    description: `Elvish Yadav – एक ऐसा नाम जो YouTube से निकल कर रियलिटी शो जीतने तक पहुँचा! 🔥 
From funny vines to becoming the first wild card winner of Bigg Boss OTT 2, Elvish has truly made history! 🏆 
लेकिन controversies ने भी उनका पीछा नहीं छोड़ा!`,
    videoLink: "https://youtu.be/UfPQWBr59Gk",
    filename: "Untitled.mp4",
    videoQuality: ["SD", "HD"],
    thumbnail: "/images/elvish-controversy.jpg",
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h1 className="text-xl font-semibold mb-4">Video Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div>
            <label className="font-semibold">Title (required)</label>
            <input
              type="text"
              value={videoData.title}
              readOnly
              className="w-full mt-1 p-2 border rounded bg-gray-50"
            />
          </div>
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              value={videoData.description}
              readOnly
              rows={10}
              className="w-full mt-1 p-2 border rounded bg-gray-50"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="border rounded overflow-hidden">
            <Image
              src={videoData.thumbnail}
              alt="Video Thumbnail"
              width={400}
              height={230}
              className="object-cover w-full"
            />
          </div>

          <div className="text-sm space-y-1">
            <p>
              <strong>Video link:</strong>{" "}
              <a
                href={videoData.videoLink}
                target="_blank"
                className="text-blue-600 underline"
              >
                {videoData.videoLink}
              </a>
            </p>
            <p>
              <strong>Filename:</strong> {videoData.filename}
            </p>
            <p>
              <strong>Video quality:</strong>{" "}
              {videoData.videoQuality.join(", ")}
            </p>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button className="px-4 py-2 bg-gray-200 rounded text-sm">
              Undo
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
