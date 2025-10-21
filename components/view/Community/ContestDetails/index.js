'use client';
import React from 'react';
import Image from 'next/image';

function ContestDetailspage() {
  return (
    <div
      role="region"
      aria-label="Comment details text area"
      className="thread-detail-main max-w-4xl mx-auto bg-white shadow-sm rounded-xl p-6 mt-6 mb-10 border border-gray-200"
      data-nosnippet=""
    >
      {/* 🟡 Status */}
      <div className="flex justify-between items-center mb-4">
        <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-md">
          Awaiting
        </div>
        <button className="text-sm font-medium text-blue-600 hover:underline">
          Follow
        </button>
      </div>

      {/* 🧑‍💻 Author Info */}
      <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4">
        <div className="relative">
          <Image
            src="https://in-exstatic-vivofs.vivo.com/bCy1HLzT9bUXp6Mb/IN-VIVO/threadResource/20220526/9ac36d9dc94d4279ab7d465c7771cdb3_w216_h216.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full border"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">User Name 1129483</h2>
          <p className="text-sm text-gray-500">Posted on Oct 21, 16:47</p>
        </div>
      </div>

      {/* 📝 Thread Content */}
      <div className="thread-detail-content leading-relaxed text-gray-700 space-y-3">
        <p>
          Hello iQOO Support Team,
        </p>
        <p>
          After updating my <strong>iQOO Z5 5G</strong> to the latest software version <strong>PD2148F_EX_A_38.1.22 (Android 13)</strong>, 
          I am facing a serious issue.
        </p>
        <p>
          Any app that uses fingerprint authentication (such as banking or app-lock apps) crashes when I try to unlock it using the fingerprint sensor. 
          As soon as I touch the fingerprint sensor, the screen locks automatically and the app crashes.
        </p>
        <p>I have already tried the following steps, but the problem still persists:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Restarted the device</li>
          <li>Cleared cache and data of affected apps</li>
          <li>Deleted and re-registered fingerprints</li>
        </ul>
      </div>

      {/* 🧾 Issue Info */}
      <ul className="feedback-list mt-6 divide-y divide-gray-100 border border-gray-200 rounded-lg">
        <li className="flex justify-between p-3 text-sm sm:text-base">
          <span className="font-medium text-gray-600">Product Model</span>
          <span className="text-gray-800">iQOO Z5</span>
        </li>
        <li className="flex justify-between p-3 text-sm sm:text-base">
          <span className="font-medium text-gray-600">Issue Frequency</span>
          <span className="text-gray-800">High frequency</span>
        </li>
        <li className="flex justify-between p-3 text-sm sm:text-base">
          <span className="font-medium text-gray-600">Issue Type</span>
          <span className="text-gray-800">System upgrade</span>
        </li>
      </ul>

      {/* 💬 Forum Section */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md">iQOO Z Series</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" aria-label="Viewed 3 times">
            👁️ <span>3</span>
          </div>
          <div className="flex items-center gap-1" aria-label="Liked 1 time">
            ❤️ <span>1</span>
          </div>
        </div>
      </div>

      {/* 🗨️ Add Comment */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-3">Add Comment</h3>
        <div className="flex items-start gap-3">
          <Image
            src="/default-avatar.png"
            alt="Avatar placeholder"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <div className="flex-1">
            <p className="text-gray-500 mb-2 text-sm">
              Post a comment here. <button className="text-blue-600 hover:underline">Sign in</button>
            </p>
          </div>
        </div>
      </div>

      {/* 🗒️ Comments Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          All Comments <span className="text-sm text-gray-500">(0)</span>
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
          Be the first to comment!
        </div>
      </div>
    </div>
  );
}

export default ContestDetailspage;
